const { Sequelize } = require("sequelize");

//=======Sequelize setup

const database = "art";
const username = "project";
const password = "project"; //connects on psql command line, check later

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("we're connected");
  await sequelize.close();
} catch (err) {
  console.log("Error: ", err);
}
