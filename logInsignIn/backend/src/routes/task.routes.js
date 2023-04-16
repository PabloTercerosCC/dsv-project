import express from 'express';
import { TokenValidation } from '../middlewares/verifyToken';
import * as task from '../controllers/task.controller';
import multer from '../middlewares/multer';

const router = express.Router();

router.use(TokenValidation);

router.route("/")
    .post(multer, task.createTask)
    .get(task.getTasks);

router.route("/:id")
    .get(task.readTask)
    .put(multer, task.updateTask)
    .delete(task.deleteTask);

export default router;