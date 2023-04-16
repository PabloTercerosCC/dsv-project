import { Router } from 'express';
import { TokenValidation } from '../middlewares/verifyToken';
import { createList, getLists, readList } from '../controllers/list.controller';

const router = Router();

router.use(TokenValidation);

router.route("/")
    .post(createList)
    .get(getLists);

router.route("/:id")
    .get(readList)

export default router;