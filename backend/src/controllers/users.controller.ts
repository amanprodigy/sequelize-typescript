import UserDao from "@app/dao/UserDao";
import { Request, Response, NextFunction } from "express";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserDao.findByPk(req.params.id);
    if(!user){
      res.boom.notFound(`User with id ${req.params.id} not found`);
    }
    res.status(200).json(user);
  } catch (e) {
    res.boom.badRequest();
  }
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserDao.findAll();
    res.status(200).json(users);
  } catch (e) {
    res.boom.badRequest();
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserDao.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.boom.badRequest();
  }
};

export const getFollowers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserDao.findByPk(req.params.id);
    if (!user) {
      res.boom.notFound(`User with id ${req.params.id} not found`);
    }
    res.status(200).json(user);
  } catch (e) {
    res.boom.notFound('User not found');
  }
};

export const getFollows = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserDao.findByPk(req.params.id);
    if (!user) {
      res.boom.notFound('User not found');
    }
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};
