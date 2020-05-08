import { Router } from "express";

import * as TweetController from "@controllers/tweets.controller"

export const tweetRouter = Router();

tweetRouter.get('/', TweetController.list);
tweetRouter.get('/:id', TweetController.get)
tweetRouter.post('/', TweetController.create)
