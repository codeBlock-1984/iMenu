import express from 'express';
import menusService from '../services/menusService';
import authorize from '../middlewares/authorize';

const router = express.Router();
const { setMenu, getMenu, getMenus } = menusService;
const { isAuth, isAdmin } = authorize;

router.post('/', isAuth, isAdmin, setMenu);
router.get('/:date', isAuth, getMenu);
router.get('/', isAuth, isAdmin, getMenus);

export default router;
