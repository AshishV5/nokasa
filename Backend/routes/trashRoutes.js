import express from 'express';
import { getAllTrashTypes, createTrashType } from '../controllers/trashController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', auth, getAllTrashTypes);
router.post('/', auth, createTrashType);

export default router;
