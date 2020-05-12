import { Router } from "express";

import * as AuthController from "@controllers/auth.controller"

export const authRouter = Router();

authRouter.post('/auth/login', AuthController.login);
