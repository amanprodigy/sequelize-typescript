// https://sequelize.org/v5/manual/models-definition.html#configuration
const defineOptions = {
  // Soft delete off
  paranoid: false,
};

module.exports = {
  development: {
    username: "aman",
    password: "asdf",
    database: "socialnetwork",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true
    },
    define: defineOptions
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true
    },
    define: defineOptions
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true
      //ssl: {
      //  ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      //}
    },
    define: defineOptions
  }
};
