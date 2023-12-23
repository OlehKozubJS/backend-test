import express from "express";
import cors from "cors";

const application = express();

const applicationRun = () => {
  console.log("Server is running at 3000 port");
};

application.use(cors());

application.get();
application.get();

application.listen(3000, applicationRun);
