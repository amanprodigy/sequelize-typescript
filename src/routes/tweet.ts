import * as _ from "lodash";
import { Router, Request, Response, NextFunction } from "express";
import { Tweet } from "@db/models/tweet";

export const tweetRouter = Router();

tweetRouter.get(
  "/tweets",
  async (req: Request, res: Response, next: NextFunction) => {
    const tweets = await Tweet.findAll();
    console.log(tweets);
    res.json(tweets);
  }
);

tweetRouter.get(
  "/tweets/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    res.json(await Tweet.findByPk(req.params.id));
  }
);
