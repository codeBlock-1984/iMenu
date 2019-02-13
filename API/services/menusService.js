import menus from '../models/menus';

const menusData = menus;

class menusService {
  static setMenu(req, res) {
    req.body.menuID = menusData.length + 1;
    const newMenu = req.body;
    menusData.push(newMenu);
    return res.status(200).json({
      status: 200,
      data: menusData,
    });
  }
}

export default menusService;
