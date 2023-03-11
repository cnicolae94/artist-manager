const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


//postgres username admin password
const app = express();

let router = express.Router();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

router.route("/getArtists")

app.get("/api", (req, res) => {});
