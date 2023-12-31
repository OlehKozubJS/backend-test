const { tryCatcher } = require("../hooks/tryCatcher");

const { saveData } = require("./saveData");
const { loadData } = require("./loadData");
const { removeData } = require("./removeData");
const { applicationRun } = require("./applicationRun");

module.exports = {
  loadData: tryCatcher(loadData),
  saveData: tryCatcher(saveData),
  removeData: tryCatcher(removeData),
  applicationRun,
};
