
import { Router } from "express";

import * as UserController from "@controllers/users.controller"

export const userRouter = Router();

userRouter.get('/users', UserController.list);
userRouter.post('/users', UserController.create)

userRouter.get('/users/:id', UserController.get)
userRouter.get('/users/:id/followers', UserController.get)
userRouter.get('/users/:id/follows', UserController.get)
