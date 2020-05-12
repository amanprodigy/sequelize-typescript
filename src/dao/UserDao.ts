import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "@app/db/models/User";
import Tweet from "@app/db/models/Tweet";
import UserFollower from "@db/models/UserFollower";
import UserFollowerDao from "@app/dao/UserFollowerDao";
import TweetDao from "@app/dao/TweetDao";

const SECRET_KEY = process.env.SECRET_KEY || "Aw3s0m3";

export default class UserDao {
  instance: User;

  constructor(instance: User) {
    this.instance = instance;
  }

  /* Finds a user by its primary key */
  public static findByPk = (id: any): Promise<User> => User.findByPk(id);

  /* Finds a user by matching certain conditions */
  public static findOne = (args: any): Promise<User> => User.findOne(args);

  /* Finds all users within the db
   * @param: void */
  public static findAll = (): Promise<User[]> => User.findAll();

  /* Creates a user given the email and password */
  public static create = (args: any): Promise<User> => {
    const { email, password } = args;
    return User.create({ email, password });
  };

  /* Creates an entry in UserFollower so that this user follows another */
  public follow = (whom: UserDao): Promise<UserFollower> =>
    UserFollowerDao.create(whom, this);

  public tweet = (content: string): Promise<Tweet> =>
    TweetDao.create({ content: content, author: this.instance });

  public static isValidCredentials = async (
    user: User,
    email: string,
    password: string
  ): Promise<boolean> =>
    user.email.toUpperCase() === email.toUpperCase() &&
    (await bcrypt.compare(password, user.password));

  public static generateJsonWebToken = (
    email: string,
    password: string
  ): string =>
    jwt.sign(
      {
        data: `${email}-${password}`
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
}
