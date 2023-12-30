const { loadFromFile } = require("../hooks");

const loadData = async (request, response) => {
  const data = loadFromFile("statistics");
  await response.send(JSON.stringify(data));
};

module.exports = { loadData };
