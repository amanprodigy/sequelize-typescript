import TweetDao from "@app/dao/TweetDao";
import { Request, Response, NextFunction } from "express";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweet = await TweetDao.findByPk(req.params.id);
    res.status(200).json(tweet);
  } catch (e) {
    res.boom.badRequest(e)
  }
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweets = await TweetDao.findAll();
    res.status(200).json(tweets);
  } catch (e) {
    res.boom.badRequest(e)
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweet = await TweetDao.create(req.body);
    res.status(201).json(tweet);
  } catch (e) {
    res.boom.badRequest(e)
  }
};
