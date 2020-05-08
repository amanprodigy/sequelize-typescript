import bodyParser from 'body-parser';
import express, { Request, Response, Application, NextFunction } from 'express';
import errorhandler from 'strong-error-handler';
import boom from 'express-boom';

import { tweetRouter } from '@app/routes/tweet';
import { userRouter } from '@app/routes/user';

export const app: Application = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// middleware for json body parsing
app.use(bodyParser.json({limit: '5mb'}));

// middleware for error reporting
app.use(boom());

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use('/tweets', tweetRouter);
app.use('/users', userRouter);
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to Tweets API');
})

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
