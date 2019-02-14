import express from 'express';
import menusService from '../services/menusService';

const router = express.Router();
const { setMenu, getMenu, getMenus } = menusService;

router.post('/', setMenu);
router.get('/:date', getMenu);
router.get('/', getMenus);

export default router;
