import { check } from 'express-validator/check';
import db from '../database/models';
// import { isNull } from 'util';

const { User } = db;


const usersValidator = {
  usersBodyValidator: [
    check('name')
      .exists()
      .withMessage('Name is required!')
      .trim(),
    check('email')
      .exists()
      .withMessage('Date is required!')
      .isEmail()
      .withMessage('Invalid email format!')
      .trim(),
    check('password')
      .exists()
      .withMessage('Password is required')
      .isString()
      .trim(),
    check('phone')
      .exists()
      .withMessage('Phone number is required')
      .isMobilePhone()
      .withMessage('Invalid phone number format!')
      .trim(),
  ],
  userIDValidator: [
    check('id')
      .exists()
      .withMessage('User ID is required!')
      .isInt({ allow_leading_zeroes: false })
      .withMessage('ID must be a valid integer value!'),
  ],
  checkUserExists: [
    check('email')
      .custom((email) => {
        return User.findOne({ where: { email } })
          .then((existingUser) => {
            if (existingUser === null) {
              return true;
            }
            return false;
          }, (error) => {
            throw new Error('Error!');
          });
      })
      .withMessage('The specified email is linked to an existing user!'),
  ],
};

export default usersValidator;
