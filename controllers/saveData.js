const { writeFile, readFile } = require("fs/promises");
const { tryCatcher } = require("../hooks/tryCatcher");

const saveData = async (request, response, next) => {
  const data = await readFile("../../messages.txt", "utf-8");
  await response.send(data);
};

module.exports = { saveData: tryCatcher(saveData) };
