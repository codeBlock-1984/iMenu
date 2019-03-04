import bcrypt from 'bcrypt';

const saltRounds = 12;

class endecPassword {
  static encryptPassword(password) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (hash) return hash;
      return err;
    });
  }

  static verifyPassword(password, hashedPassword) {
    bcrypt.compare(password, hashedPassword, (err, res) => {
      if (res) return true;
      return false;
    });
  }
}
export default endecPassword;
