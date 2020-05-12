import { Router } from "express";

import * as TweetController from "@controllers/tweets.controller"

export const tweetRouter = Router();

tweetRouter.get('/tweets', TweetController.list);
tweetRouter.get('/tweets/:id', TweetController.get)
tweetRouter.post('/tweets', TweetController.create)
