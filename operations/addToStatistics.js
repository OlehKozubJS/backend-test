const { writeFile, readFile } = require("fs/promises");

const addToStatistics = async (request, response, next) => {
  try {
    const { url, method } = request;
    const oldStatsData = await readFile("./db/statistics.txt", "utf-8");
    const newStatsData = {
      date: new Date().toString(),
      url: url,
      method: method,
    };
    const newStatsDataString = JSON.stringify(newStatsData);
    await writeFile(
      "./db/statistics.txt",
      `${oldStatsData}\n \n${newStatsDataString}`
    );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

module.exports = { addToStatistics };
