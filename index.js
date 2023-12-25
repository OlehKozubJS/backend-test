import express from "express";
import cors from "cors";
import { writeFile, readFile } from "fs/promises";
import bodyParser from "body-parser";

const application = express();

const applicationRun = () => {
  console.log("Server is running at 3000 port");
};

const addToStatistics = async (request, response, next) => {
  try {
    const { url, method } = request;
    const oldStatsData = await readFile("./db/statistics.txt", "utf-8");
    const newStatsData = {
      date: new Date().toString(),
      url: url,
      method: method,
    };
    const newStatsDataString = JSON.stringify(newStatsData);
    await writeFile(
      "./db/statistics.txt",
      `${oldStatsData}\n \n${newStatsDataString}`
    );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

const saveData = async (request, response, next) => {
  try {
    const oldDataString = await readFile("../messages.txt", "utf-8");
    const oldData = await JSON.parse(oldDataString);
    const body = await request.body;
    let newData;
    if (body.name && body.message) {
      newData = [...oldData, body];
    } else {
      newData = [...oldData];
    }
    const newDataString = JSON.stringify(newData);
    await writeFile("../messages.txt", newDataString);
    response.send(body);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

const loadData = async (request, response, next) => {
  try {
    const data = await readFile("../messages.txt", "utf-8");
    await response.send(data);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

application.use(cors());
application.use(bodyParser.json());
//application.use(addToStatistics);

application.post("/save", saveData);
application.get("/load", loadData);

application.listen(3000, applicationRun);
