import express from "express";
import cors from "cors";
import { writeFile, readFile } from "fs/promises";

const application = express();

const applicationRun = () => {
  console.log("Server is running at 3000 port");
};

const saveData = (request, response, next) => {
  try {
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

const loadData = (request, response, next) => {
  try {
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

application.use(cors());

application.get("/save", saveData);
application.get("/load", loadData);

application.listen(3000, applicationRun);
