import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const application = express();

const applicationRun = () => {
  console.log("Server is running at 3000 port");
};

application.use(cors());
application.use(bodyParser.json());
application.use(addToStatistics);

application.post("/save", saveData);
application.get("/load", loadData);

application.listen(3000, applicationRun);
