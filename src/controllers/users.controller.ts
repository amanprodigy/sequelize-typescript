import { UserDao } from "@app/dao/users";
import { Request, Response, NextFunction } from "express";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserDao.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserDao.findAll();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Printing request body");
    console.log(req.body);
    const user = await UserDao.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
};
