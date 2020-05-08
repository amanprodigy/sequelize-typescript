import { User } from "@db/models/user";

export class UserDao {
  public static findByPk(id: any): Promise<User> {
    return User.findByPk(id);
  }

  public static findAll(): Promise<User[]> {
    return User.findAll();
  }

  public static create = (args: any): Promise<User> => {
    console.log("Printing args .....");
    console.log(args);
    return User.create({ email: args.email, password: args.password });
  };
}
