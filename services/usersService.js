import db from '../database/models';
import endecPassword from '../utils/endecPassword';
import auth from '../helpers/auth';

const { User } = db;
const { encryptPassword } = endecPassword;
const { createToken } = auth;

class usersService {
  static async createUser(req, res) {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({
        status: 400,
        error: 'Email is linked to an existing user!',
      });
    }
    req.body.password = await encryptPassword(req.body.password);
    console.log(req.body.password);
    return User.create(req.body)
      .then((newUser) => {
        const { id, isAdmin } = newUser;
        const token = createToken({ id, isAdmin });
        return res.header('x-auth-token', token).status(201).json({
          status: 201,
          data: newUser,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal server error!',
        });
      });
  }

  static removeUser(req, res) {
    const userID = parseInt(req.params.id, 10);
    return User.destroy({ where: { id: userID } })
      .then((user) => {
        return res.status(200).json({
          status: 200,
          data: user,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error,
        });
      });
  }
}

export default usersService;
