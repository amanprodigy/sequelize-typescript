
import { Router } from "express";

import * as UserController from "@controllers/users.controller"

export const userRouter = Router();

userRouter.get('/', UserController.list);
userRouter.get('/:id', UserController.get)
userRouter.post('/', UserController.create)
