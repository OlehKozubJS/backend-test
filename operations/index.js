const { addToStatistics } = require("./addToStatistics");
const { saveData } = require("./saveData");
const { loadData } = require("./loadData");
const { applicationRun } = require("./applicationRun");
const { removeData } = require("./removeData");

module.exports = {
  addToStatistics,
  loadData,
  saveData,
  removeData,
  applicationRun,
};
