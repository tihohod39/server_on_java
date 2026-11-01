import { Router } from 'express';
import {
  getTasks,
  getTaskById,
  createTask
} from '../controllers/tasks.js';

const router = Router();

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);

export default router;
 