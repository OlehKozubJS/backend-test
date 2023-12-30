const { writeFile, readFile } = require("fs/promises");
const { resolve } = require("path");
const { tryCatcher } = require("./tryCatcher");

const loadData = async (request, response) => {
  const filePath = resolve("db", "messages.txt");
  const data = await readFile(filePath, "utf-8");
  await response.send(JSON.stringify(data));
};

module.exports = { loadData: tryCatcher(loadData) };
