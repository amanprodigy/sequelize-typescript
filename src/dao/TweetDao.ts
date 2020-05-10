import Tweet from '@db/models/tweet';

export default class TweetDao {

  public static findByPk = (id: any): Promise<Tweet> =>
    Tweet.findByPk(id)

  public static findAll = (): Promise<Tweet[]> =>
    Tweet.findAll()

  public static create = (args: any): Promise<Tweet> =>
    Tweet.create({content: args.content})

}
