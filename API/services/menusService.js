import { validationResult } from 'express-validator/check';
import menus from '../models/menus';

const menusData = menus;

class menusService {
  static setMenu(req, res) {
    const vError = validationResult(req);
    if (!vError.isEmpty()) {
      const errorMsg = vError.array()[0].msg;
      return res.status(400).json({
        status: 400,
        error: errorMsg,
      });
    }

    req.body.menuID = menusData.length + 1;
    const newMenu = req.body;
    menusData.push(newMenu);
    return res.status(200).json({
      status: 200,
      data: menusData,
    });
  }

  static getMenu(req, res) {
    const vError = validationResult(req);
    if (!vError.isEmpty()) {
      const errorMsg = vError.array()[0].msg;
      return res.status(400).json({
        status: 400,
        error: errorMsg,
      });
    }

    const menuDate = req.params.date;
    console.log(menuDate);
    const singleMenu = menusData.find(menu => menu.menuDate === menuDate);
    console.log(singleMenu);
    if (singleMenu) {
      return res.status(200).json({
        status: 200,
        data: singleMenu,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Menu with specified date does not exist!',
    });
  }

  static getMenus(req, res) {
    const allMenus = menusData;
    res.status(200).json({
      status: 200,
      data: allMenus,
    });
  }
}

export default menusService;
