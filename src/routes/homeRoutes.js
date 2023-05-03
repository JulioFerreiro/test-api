import { Router } from 'express';
import HomeController from '../controllers/HomeControllers';

const router = new Router();

router.get('/', HomeController.index);

export default router;
