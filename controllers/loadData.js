const { tryCatcher } = require("../hooks/tryCatcher");

const loadData = async (request, response) => {
  await response.send(JSON.stringify(data));
};

module.exports = { loadData: tryCatcher(loadData) };
