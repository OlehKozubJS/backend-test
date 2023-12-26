const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  addToStatistics,
  saveData,
  loadData,
  applicationRun,
} = require("./operations");

const application = express();

application.use(cors());
application.use(bodyParser.json());
application.use(addToStatistics);

application.post("/save", saveData);
application.get("/load", loadData);

application.listen(3000, applicationRun);

//set common js imports/exports
