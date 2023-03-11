const { Sequelize } = require("sequelize");

const database = "art";
const username = "project"; //is owner on "art" database
const password = "project";

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("We're connected");
} catch (err) {
  console.log("Error: ", err);
}
