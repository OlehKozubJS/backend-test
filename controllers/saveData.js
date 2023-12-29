const { writeFile, readFile } = require("fs/promises");
const { tryCatcher } = require("./tryCatcher");

const saveData = async () => {
  const data = readFile("../../messages.txt", "utf-8");
  response.send(data);
};

module.exports = { saveData: tryCatcher(saveData) };
