import express from 'express';
import { getUser } from '../controllers/userController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', auth, getUser);

export default router;
