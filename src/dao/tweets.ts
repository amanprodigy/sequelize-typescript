import { Tweet } from '@db/models/tweet';

export class TweetDao {

  public static findByPk(id: any): Promise<Tweet> {
    return Tweet.findByPk(id)
  }

  public static findAll(): Promise<Tweet[]> {
    return Tweet.findAll()
  }

  public static create = (args: any): Promise<Tweet> => {
    return Tweet.create({content: args.content})
  }
}
