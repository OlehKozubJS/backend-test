import axios from "axios";

const nameInput = document.querySelector(".nameInput");
const messageInput = document.querySelector(".messageInput");
const indexInput = document.querySelector(".indexInput");
const saveButton = document.querySelector(".saveButton");
const loadButton = document.querySelector(".loadButton");
const deleteButton = document.querySelector(".deleteButton");
const output = document.querySelector(".output");

let nameData = "";
let messageData = "";
let indexData = -1;

const handleNameInput = () => {
  nameData = nameInput.value;
};

const handleMessageInput = () => {
  messageData = messageInput.value;
};

const handleIndexInput = () => {
  indexData = indexInput.value;
};

const handleLoad = async () => {
  try {
    const response = await axios.get("http://localhost:3000/load");
    const result = await response.data;
    output.textContent = result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
/*
const handleSave = async () => {
  try {
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const handleDelete = async () => {
  try {
  } catch (error) {
    console.log(error);
    throw error;
  }
};
*/
const handleOutput = (data) => {
  output.textContent = data;
};

nameInput.addEventListener("input", handleNameInput);
messageInput.addEventListener("input", handleMessageInput);
indexInput.addEventListener("input", handleIndexInput);
loadButton.addEventListener("click", handleLoad);
//saveButton.addEventListener("click", handleSave);
//deleteButton.addEventListener("click", handleDelete);
