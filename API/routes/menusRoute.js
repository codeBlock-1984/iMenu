import express from 'express';
import menusService from '../services/menusService';

const router = express.Router();
const { setMenu, getMenu } = menusService;

router.post('/', setMenu);
router.get('/:date', getMenu);

export default router;
