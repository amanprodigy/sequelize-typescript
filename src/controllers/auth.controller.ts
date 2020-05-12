import { Request, Response, NextFunction } from "express";

import UserDao from "@app/dao/UserDao";

/* Logs in a user based on email and password */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;

  if(email && password){

    // Check if a user exists with this email
    const user = await UserDao.findOne({email});

    // If no such user exists, send 401 Unauthtenticated
    if(!user){
      res.status(401).json({ message: `No such user exists with ${email}` })
    }

    if(UserDao.isValidCredentials(user, email, password)){
      const jwt = UserDao.generateJsonWebToken(email, password);
      res.status(200).json({ token: jwt, message: 'Successfully logged in' })
    } else{
      res.status(401).json({ message:'Incorrect email and/or password' })
    }
  } else{
    res.status(401).json({ message: 'Email or password not found' });
  }

};

