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
} catch (err) {
  console.log("Error: ", err);
}
