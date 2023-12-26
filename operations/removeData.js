const { writeFile, readFile } = require("fs/promises");

const removeData = async (request, response, next) => {
  try {
    const oldDataString = await readFile("../messages.txt", "utf-8");
    const oldData = await JSON.parse(oldDataString);
    const params = await request.params;
    const { messageIndex } = params;
    const newData = oldData.map((message) => {
      message.messageIndex !== messageIndex;
    });
    const newDataString = JSON.stringify(newData);
    await writeFile("../messages.txt", newDataString);
    response.send(body);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

module.exports = { removeData };
