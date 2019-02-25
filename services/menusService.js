import Validate from '../middlewares/validate';
import menus from '../models/menus';

const menusData = menus;
const { validate } = Validate;

class menusService {
  static setMenu(req, res) {
    validate(req, res);

    req.body.menuID = menusData.length + 1;
    const newMenu = req.body;
    menusData.push(newMenu);
    return res.status(200).json({
      status: 200,
      data: menusData,
    });
  }

  static getMenu(req, res) {
    validate(req, res);

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
