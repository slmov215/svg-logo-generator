const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "list",
    name: "shape",
    message: 'What shape would you like the logo to render?',
    choices: ["Circle", "Triangle", "Square"],
  },

  {
    type: "input",
    name: "text",
    message: 'Please enter 1-3 letters for your logo :',
  },

  {
    type: "input",
    name: "textColor",
    message: `Please enter text color keyword or a hexadecimal number as the logo's text color (ex: 'white' or '#FFFFFF) :`,
  },

  {
    type: "input",
    name: "shapeBkGrColor",
    message: `Please enter a color keyword or a hexadecimal number as the logo's shape color (ex: 'black' or '#000000) :`,
  },
];

function writeToFile(name, data) {

}

function init() {

}

init();