import { TweetDao } from "@app/dao/tweets";
import { Request, Response, NextFunction } from "express";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweet = await TweetDao.findByPk(req.params.id);
    console.log(tweet);
    res.status(200).json(tweet);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweets = await TweetDao.findAll();
    res.status(200).json(tweets);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweet = await TweetDao.create(req.body);
    res.status(201).json(tweet);
  } catch (e) {
    next(e);
  }
};
