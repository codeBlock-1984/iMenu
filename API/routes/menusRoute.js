import express from 'express';
import menusService from '../services/menusService';

const router = express.Router();
const { setMenu } = menusService;

router.post('/', setMenu);

export default router;
