import express from 'express';
import menusService from '../services/menusService';
import menusValidator from '../middlewares/menusValidator';

const router = express.Router();
const { setMenu, getMenu, getMenus } = menusService;
const { menuBodyValidator, menuDateValidator } = menusValidator;

router.post('/', menuBodyValidator, setMenu);
router.get('/:date', menuDateValidator, getMenu);
router.get('/', getMenus);

export default router;
