import { app } from "@app/app";
import { sequelize } from "@db/models/index";

app.listen(8000, () => {
  console.log("Server is running at 8000");
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Db connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection()
