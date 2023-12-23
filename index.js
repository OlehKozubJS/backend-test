import express from "express";
import cors from "cors";
import { writeFile, readFile } from "fs/promises";

const application = express();

const applicationRun = () => {
  console.log("Server is running at 3000 port");
};

const addToStatistics = async (request, response, next) => {
  try {
    const { url, method } = request;
    const oldStatsData = await readFile("./db/statistics.txt", "utf-8");
    const newStatsData = `date: ${new Date().toString()}, url: ${url}, method: ${method}`;
    await writeFile(
      "./db/statistics.txt",
      `${oldStatsData}\n \n${newStatsData}`
    );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

const saveData = async (request, response, next) => {
  try {
    const oldData = await readFile("./db/data.txt", "utf-8");
    const newData = await request.body;
    await writeFile("./db/data.txt", `${oldData}\n \n${newData}`);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

const loadData = async (request, response, next) => {
  try {
    const data = await readFile("./db/data.txt", "utf-8");
    await response.send(data);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

application.use(cors());
application.use(addToStatistics);

application.post("/save", saveData);
application.get("/load", loadData);

application.listen(3000, applicationRun);
