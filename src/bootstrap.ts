import UserDao from "@app/dao/UserDao";

const bootstrap = async (): Promise<void> => {
  try {
    const aman = await UserDao.create({
      email: "aman@gmail.com",
      password: "12345"
    });
    const richa = await UserDao.create({
      email: "richa@gmail.com",
      password: "214343"
    });
    const little = await UserDao.create({
      email: "little@gmail.com",
      password: "8343743"
    });

    const amanDao = new UserDao(aman);
    const richaDao = new UserDao(richa);
    const littleDao = new UserDao(little);

    await amanDao.follow(richaDao);
    await amanDao.follow(littleDao);
    await richaDao.follow(littleDao);
    await richaDao.follow(amanDao);

    amanDao.tweet("Nice vacation");
    amanDao.tweet("Rocking with NodeJS");
    richaDao.tweet("Just baked an almond cake");
    littleDao.tweet("Data science is fun");
    littleDao.tweet("Bored in home");

  } catch (err) {
    throw(err)
  }
};

export default bootstrap;
