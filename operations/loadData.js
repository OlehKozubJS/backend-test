const { readFile } = require("fs/promises");

const loadData = async (request, response, next) => {
  try {
    const data = await readFile("../messages.txt", "utf-8");
    await response.send(data);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

module.exports = { loadData };
