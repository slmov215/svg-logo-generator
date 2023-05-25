// Package needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateShape = require('./lib/generate');

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
    type: "list",
    name: "logoShape",
    message: `Please choose the logo's shape :`,
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: `Please enter a color keyword or a hexadecimal number as the logo's shape's color (ex: 'black' or '#000000)`,
  },
];


function init() {
  inquirer 
    .prompt(question)
    .then((data) => {
      const savePath = `./examples/${data.logoShape}logo.svg`
      const svgLogo = generateShape(data)
      fs.writeFile(savePath, svgLogo, (err) => 
      err ? console.error(err) : console.log('Generated logo.svg')
      );
    })
    .catch((err) => console.log(err));
};

init();