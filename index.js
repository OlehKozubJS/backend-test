const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  //addToStatistics,
  saveData,
  loadData,
  removeData,
  applicationRun,
} = require("./operations");

const application = express();

application.use(cors());
application.use(bodyParser.json());
//application.use(addToStatistics);
/*
const tryCatcher = (callback) => {
  const newFunction = async (request, response, next) => {
    try {
      await callback(request, response, next);
    } catch (error) {
      next(error);
    }
  };
  return newFunction;
};*/

application.post("/save", saveData);
application.get("/load", loadData);
application.delete("/remove/:messageToDeleteId", removeData);

application.listen(3000, applicationRun);

//const { params } = request;
//const { config } = params;
//const { messageIndex } = config;

//set common js imports/exports
//set delete export + set local frontend
//switch off adding to statistics
//switch on adding to statistics
//http://localhost:3000/load
//http://localhost:3000/save
//http://localhost:3000/remove/:
//http://localhost:3000/add/:
//http://localhost:3000/loadone/:
//http://localhost:3000/change/:
