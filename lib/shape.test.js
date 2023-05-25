const { Shape, Circle, Triangle, Square } = require("./shape");

describe("Shape", () => {
    describe("Instantiate", () => {
      it("should be an instance of Shape class", () => {
        const shape = new Shape("HII");

        expect(shape).toBeInstanceOf(Shape);
      });
    });
  });

// describe("Circle", () => {
//   describe("Render Method", () => {
//     it("should render a circle string", () => {
//       const circle = new Circle({
//         text: "CIR",
//         textColor: "black",
//         shapeColor: "red",
//         logoShape: "circle",
//       });
//       const expected = `<circle cx="150" cy="115" r="80" fill="red" />
//         <text x="150" y="125" font-size="70" text-anchor="middle" fill="black">CIR</text>`;
//       // circle.shapeColor = "red";
//       expect(circle.renderLogo()).toEqual(expected);
//     });
//   });
// });

// describe("Triangle", () => {
//     describe("Render Method", () => {
//       it("should return triangle string", () => {
//         const triangle = new Triangle({
//           text: "TRI",
//           textColor: "red",
//           shapeColor: "green",
//           logoShape: "triangle",
//         });
//         expect(triangle.renderLogo()).toBe(
//           `<polygon points="100 0, 0 ,0 50, 100" fill="#000" />`
//         );
//       });
//     });
//   });  

// describe("Square", () => {
//     describe("Render Method", () => {
//       it("expected to render square string", () => {
//         const square = new Square({
//           text: "SQR",
//           textColor: "black",
//           shapeColor: "yellow",
//           logoShape: "square",
//         });
//         expect(square.renderLogo()).toBe(
//           `<rect width="100" height="100" rx="15" fill="yellow" />`
//         );
//       });
//     });
//   });

