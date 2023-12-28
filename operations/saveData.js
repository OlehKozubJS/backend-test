const { writeFile, readFile } = require("fs/promises");

const saveData = async (request, response, next) => {
  try {
    const oldDataString = await readFile("../messages.txt", "utf-8");
    //const oldData = await JSON.parse(oldDataString);
    const body = await request.body;
    let messageIndex = 0;
    oldData.forEach((message) => {
      if (messageIndex === message.messageIndex) {
        messageIndex += 1;
      }
    });
    let newData;
    if (body.name && body.message) {
      newData = [...oldDataString, { ...body, messageIndex }];
    } else {
      newData = [...oldDataString];
    }
    const newDataString = JSON.stringify(newData);
    await writeFile("../messages.txt", newDataString);
    response.send(`request body: ${body}, full data: ${newDataString}`);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

module.exports = { saveData };
