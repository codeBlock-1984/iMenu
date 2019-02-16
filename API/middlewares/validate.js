import { validationResult } from 'express-validator/check';

class Validate {
  static validate(req, res) {
    const vError = validationResult(req);

    if (!vError.isEmpty()) {
      const errorMsg = vError.array()[0].msg;
      return res.status(400).json({
        status: 400,
        error: errorMsg,
      });
    }
    return undefined;
  }
}

export default Validate;
