const { tryCatcher } = require("./tryCatcher");
const { loadFromFile } = require("./loadFromFile");
const { saveToFile } = require("./saveToFile");

module.exports = {
  tryCatcher,
  loadFromFile: tryCatcher(loadFromFile),
  saveToFile: tryCatcher(saveToFile),
};
