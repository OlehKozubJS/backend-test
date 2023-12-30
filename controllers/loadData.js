const { writeFile, readFile } = require("fs/promises");
const { tryCatcher } = require("./tryCatcher");

const loadData = async (request, response, next) => {
  const data = await readFile("../../messages.txt", "utf-8");
  await response.send(data);
};

module.exports = { loadData: tryCatcher(loadData) };
