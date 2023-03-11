const { Sequelize } = require("sequelize");

const database = "art";
const username = "project";
const password = "project";

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

const Artist = sequelize.define("artist", {
  artistId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  artistName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artistImg: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  artistDOB: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Painting = sequelize.define("painting", {
  paintingId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      isURL: true,
    },
  },
  artistId: {
    type: Sequelize.INTEGER,
    references: {
      model: Artist,
      key: "artistId",
    },
  },
});

Artist.hasMany(Painting, { foreignKey: "artistId" });
Painting.belongsTo(Artist, { foreignKey: "artistId" });

sequelize.sync({ force: true });
