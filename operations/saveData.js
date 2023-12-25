import { writeFile, readFile } from "fs/promises";

const saveData = async (request, response, next) => {
  try {
    const oldDataString = await readFile("../messages.txt", "utf-8");
    const oldData = await JSON.parse(oldDataString);
    const body = await request.body;
    let newData;
    if (body.name && body.message) {
      newData = [...oldData, body];
    } else {
      newData = [...oldData];
    }
    const newDataString = JSON.stringify(newData);
    await writeFile("../messages.txt", newDataString);
    response.send(body);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  next();
};

export { saveData };
