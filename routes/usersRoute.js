import express from 'express';
import usersService from '../services/usersService';
import authorize from '../middlewares/authorize';

const router = express.Router();
const { createUser, removeUser } = usersService;
const { isAuth, isAdmin } = authorize;

router.post('/', createUser);
router.delete('/:id', isAuth, isAdmin, removeUser);
// router.get('/', getMenus);

export default router;
