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

  static checkExists(itemObj, itemObjProp, prop) {
    const existingItem = itemObj.find(item => item[prop] === itemObjProp);
    console.log(existingItem);
    console.log(itemObj);
    console.log(itemObjProp);
    return existingItem;
    //if (!existingItem) return true;
    //return false;
  }
}

export default Validate;
