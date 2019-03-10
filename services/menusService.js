// import { isNullOrUndefined } from 'util';
import db from '../database/models';

const { Menu } = db;


class menusService {
  static setMenu(req, res) {
    const { menuDate, mealOptions } = req.body;
    return Menu.create(menuDate)
      .then((menu) => {
        menu.addMeals(mealOptions);
        return res.status(201).json({
          status: 201,
          data: menu,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }

  static getMenu(req, res) {
    const menuDate = req.params.date;
    const dateT = Date.parse(menuDate);

    return Menu.findOne({ where: { menuDate: dateT } })
      .then((menu) => {
        console.log(menu);
        if (menu == null) {
          return res.status(404).json({
            status: 404,
            error: 'Menu with specified date not found!',
          });
        }

        return res.status(200).json({
          status: 200,
          data: menu,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }

  static getMenus(req, res) {
    return Menu.findAll()
      .then((menu) => {
        return res.status(200).json({
          status: 200,
          data: menu,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }
}

export default menusService;
