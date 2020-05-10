import bodyParser from 'body-parser';
import express, { Request, Response, Application, NextFunction } from 'express';
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

// enable cors for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use('/api/', tweetRouter);
app.use('/api/', userRouter);
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to Tweet Social Network');
})
app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Tweet API Home' });
})

app.use(function (req, res) {
  res.boom.notFound(); // Responds with a 404 status code
});
