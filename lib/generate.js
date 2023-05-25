const { Shape, Circle, Triangle, Square } = require("./shape");

const generateShape = (data) => {
  const {logoShape} = data;
  switch (logoShape) {
    case "circle":
      const generateCircle = new Circle(data);
      return generateCircle;
      break;

    case "triangle":
      const generateTriangle = new Triangle(data);
      return generateTriangle;
      break;

    case "square":
      const generateSquare = new Square(data);
      return generateSquare;
      break;

    default:
      return `OH NO! Something went wrong`;
      break;
  };
};

// const generateSVG = (shape) => {
//   return `
//   <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//     ${shape.render()}
//     <text
//       x="50%"
//       y="${shape.logoShape != "triangle" ? "50%" : "40%"}"
//       text-anchor="middle"
//       fill="${shape.textColor}"
//       font-size="2.3rem" letter-spacing="2" dy=".3em"
//       font-family="monospace">${shape.logoName}
//     </text>
//   </svg>
//   `;
// };
module.exports = generateShape;