import express from 'express';
import menusService from '../services/menusService';
import menusValidator from '../middlewares/menusValidator';

const router = express.Router();
const { setMenu, getMenu, getMenus } = menusService;
const { menuBodyValidator, menuDateValidator, checkMenuIsSet } = menusValidator;

router.post('/', menuBodyValidator, checkMenuIsSet, setMenu);
router.get('/:date', menuDateValidator, getMenu);
router.get('/', getMenus);

export default router;
