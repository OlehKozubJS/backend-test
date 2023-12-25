import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  addToStatistics,
  saveData,
  loadData,
  applicationRun,
} from "./operations";

const application = express();

application.use(cors());
application.use(bodyParser.json());
application.use(addToStatistics);

application.post("/save", saveData);
application.get("/load", loadData);

application.listen(3000, applicationRun);
