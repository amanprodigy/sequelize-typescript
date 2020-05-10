import UserFollower from "@db/models/UserFollower";
import UserDao from "@app/dao/UserDao";

export default class UserFollowerDao {
  instance: UserFollower;

  constructor(instance: UserFollower) {
    this.instance = instance;
  }

  public static create = async (
    whom: UserDao,
    who: UserDao
  ): Promise<UserFollower> =>
    UserFollower.create({
      userId: whom.instance.id,
      followerId: who.instance.id
    });
}
