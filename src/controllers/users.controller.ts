import { Request, Response, NextFunction } from "express";

import UserDao from "@app/dao/UserDao";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserDao.findByPk(req.params.id);
    if (!user) {
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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<string | undefined> => {
  const { email, password } = req.body;

  if(email && password){

    // Check if a user exists with this email
    const user = await UserDao.findOne({email});

    // If no such user exists, send 401 Unauthtenticated
    if(!user){
      res.status(401).json({ message: `No such user exists with ${email}` })
    }

    if(UserDao.isValidCredentials(user, email, password)){
      return UserDao.generateJsonWebToken(email, password);
    } else{
      res.status(401).json({ message:'Incorrect email and/or password' })
    }
  } else{
    res.status(401).json({ message: 'Email or password not found' });
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
    res.boom.notFound("User not found");
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
      res.boom.notFound("User not found");
    }
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

