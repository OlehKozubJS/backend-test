const { writeFile, readFile } = require("fs/promises");

const removeData = async (request, response, next) => {
  try {
    const oldDataString = await readFile("../messages.txt", "utf-8");
    const oldData = await JSON.parse(oldDataString);
    const { params } = await request;
    const { messageIndex } = params;
    const newData = oldData.filter((message) => {
      message.messageIndex !== messageIndex;
    });
    const deletedMessage = oldData.find((message) => {
      message.messageIndex === messageIndex;
    });
    const newDataString = JSON.stringify(newData);
    await writeFile("../messages.txt", newDataString);
    response
      .status(204)
      .send(`deleed mesage: ${deletedMessage}, full data: ${newDataString}`);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

module.exports = { removeData };
