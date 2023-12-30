const { writeFile, readFile } = require("fs/promises");
//const { tryCatcher } = require("./tryCatcher");

const loadData = async (request, response, next) => {
  try {
    const data = await readFile("../db/statistics.txt", "utf-8");
    await response.send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    next();
  }
};

module.exports = { loadData };
