const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

const app = express();

const PORT = 8080;
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

app.use(bodyParser.json());
app.use(cors());

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

Artist.hasMany(Painting, { as: "Artist", foreignKey: "artistId" });
Painting.belongsTo(Artist, { as: "Artist", foreignKey: "artistId" });

//=======Artist CRUD operations

//sync endpoint
app.get("/sync", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    res.status(201).json({ message: "Tables created" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Error occured" });
  }
});

//get all artists
app.get("/artists", async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.status(200).json(artists); //handle empty lists in fetch calls
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//add an artist
app.post("/artists", async (req, res) => {
  try {
    await Artist.create(req.body);
    res.status(201).json({ message: "Artist created." }); //handle empty lists in fetch calls
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//fetch an artist
app.get("/artists/:aid", async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.aid);
    if (artist) {
      res.status(200).json(artist);
    } else {
      res.status(404).json({ message: "Artist not found." });
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//update an artist
app.put("/artists/:aid", async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.aid);
    if (artist) {
      await artist.update(req.body, {
        fields: ["artistName", "artistDOB", "artistImg"],
      });
      res.status(202).json({ message: "Artist updated succesfully." });
    } else {
      res.status(404).json({ message: "Artist not found." });
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//delete an artist
app.delete("/artists/:aid", async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.aid);
    if (artist) {
      await artist.destroy();
      res.status(202).json({ message: "Artist now deleted from database." });
    } else {
      res.status(404).json({ message: "Artist not found." });
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//=======Painting CRUD operations

//get all paintings
app.get("/paintings", async (req, res) => {
  try {
    const paintings = await Painting.findAll();
    res.status(200).json(paintings); //handle empty lists in fetch calls
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//get all paintings from an artist
app.get("/paintings/:aid", async (req, res) => {
  try {
    const paintings = await Painting.findAll({
      where: {
        artistId: req.params.aid,
      },
    });
    res.status(200).json(paintings);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//add a painting
app.post("/paintings", async (req, res) => {
  try {
    await Painting.create(req.body);
    res.status(201).json({ message: "Painting created." }); //handle empty lists in fetch calls
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//fetch a painting
app.get("/paintings/:pid", async (req, res) => {
  try {
    const painting = await Painting.findByPk(req.params.pid);
    if (painting) {
      res.status(200).json(painting);
    } else {
      res.status(404).json({ message: "Painting not found." });
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//update a painting
app.put("/paintings/:pid", async (req, res) => {
  try {
    const painting = await Painting.findByPk(req.params.pid);
    if (painting) {
      await painting.update(req.body, {
        fields: ["artistName", "artistDOB", "artistImg"], //CHANGE HERE
      });
      res.status(202).json({ message: "Painting updated succesfully." });
    } else {
      res.status(404).json({ message: "Painting not found." });
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

//delete a painting
app.delete("/paintings/:pid", async (req, res) => {
  try {
    const painting = await Painting.findByPk(req.params.pid);
    if (painting) {
      await painting.destroy();
      res.status(202).json({ message: "Painting now deleted from database." });
    } else {
      res.status(404).json({ message: "Painting not found." });
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: `Error occured: ${err}.` });
  }
});

app.listen(PORT);
