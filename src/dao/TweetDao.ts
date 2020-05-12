import Tweet from "@db/models/tweet";
import User from "@db/models/user";

export default class TweetDao {
  public static findByPk = (id: string): Promise<Tweet> => Tweet.findByPk(id);

  public static findAll = (): Promise<Tweet[]> => Tweet.findAll();

  public static create = (args: {
    content: string;
    author: User;
  }): Promise<Tweet> =>
    Tweet.create({ content: args.content, author_id: args.author.id });
}
