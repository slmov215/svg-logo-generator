const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shape");

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

  let svgString = "";
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${data.shape}`;

  let shapeChoice;
  if (data.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeBkGrColor}"/>`;
  } else if (data.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${data.shapeBkGrColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${data.shapeBkGrColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(name, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      if (data.text.length > 3) {
        console.log("Please enter a value of at least 3 characters");
        promptUser();
      } else {
        writeToFile("./examples/logo.svg", data);
      }
    });
}

init();