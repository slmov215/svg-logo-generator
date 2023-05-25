// Package needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateShape, generateSVG } = require('./lib/generate');

const question = [
  {
    type: "input",
    name: "text",
    message: `Please enter 1-3 letters for your logo :`,
  },
  {
    type: "input",
    name: "textColor",
    message: `Please enter text color keyword or a hexadecimal number as the logo's text color (ex: 'white' or '#FFFFFF) :`,
  },
  {
    type: "input",
    name: "bgColor",
    message: `Please enter a color keyword or a hexadecimal number as the logo's background color (ex: 'black' or '#000000)`,
  },
  {
    type: "list",
    name: "logoShape",
    message: `Please choose the logo's shape :`,
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: `Please enter a color keyword or a hexadecimal number as the logo's shape's color (ex: 'blue' or '#0000FF)`,
  },
];


function init() {
  inquirer 
    .prompt(question)
    .then((data) => {
      const savePath = "./examples/logo.svg"
      const svgLogo = generateShape(data)
      fs.writeFile(savePath, generateSVG(generateShape(data)), (err) => 
      err ? console.error(err) : console.log('Generated logo.svg')
      );
    })
    .catch((err) => console.log(err));
};

init();