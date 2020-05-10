import User from "@db/models/user";
import Tweet from "@db/models/tweet";
import UserFollower from "@db/models/UserFollower";

import UserFollowerDao from "@app/dao/UserFollowerDao";
import TweetDao from "@app/dao/TweetDao";

export default class UserDao {
  instance: User;

  constructor(instance: User) {
    this.instance = instance;
  }

  /* Finds a user by its primary key */
  public static findByPk = (id: any): Promise<User> => User.findByPk(id);

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
    TweetDao.create({ content: content, user: this.instance });
}
