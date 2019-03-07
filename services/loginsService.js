import db from '../database/models';
import endecPassword from '../utils/endecPassword';
import auth from '../helpers/auth';

const { User } = db;
const { verifyPassword } = endecPassword;
const { createToken } = auth;

class loginsService {
  static async loginUser(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user === null) {
      return res.status(400).json({
        status: 400,
        error: 'Email incorrect!',
      });
    }
    const isDecoded = await verifyPassword(password, user.password);
    if (!isDecoded) {
      return res.status(400).json({
        status: 400,
        error: 'Password incorrect!',
      });
    }
    const { id, isAdmin } = user;
    const token = createToken({ id, isAdmin });
    return res.header('x-auth-token', token).status(201).json({
      status: 201,
      data: 'Login was successful!',
    });
  }
}

export default loginsService;
