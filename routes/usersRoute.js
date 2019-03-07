import express from 'express';
import usersService from '../services/usersService';

const router = express.Router();
const { createUser } = usersService;

router.post('/', createUser);
// router.get('/:date', menuDateValidator, getMenu);
// router.get('/', getMenus);

export default router;
