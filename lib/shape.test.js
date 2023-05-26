const { Shape, Circle, Triangle, Square } = require("./shape.js");

describe("Shape Instantiate", () => {
  it("should be an instance of Shape class", () => {
    const shape = new Shape("HII");
    expect(shape).toBeInstanceOf(Shape);
  });
});

describe("Circle test", () => {
  it(" should render a #000080 background for circle", () => {
    const shape = new Circle();
    shape.setColor("#000080");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#000080" />'
    );
  });
});

describe("Triangle test", () => {
  it(" should render a #0000FF background for triangle", () => {
    const shape = new Triangle();
    shape.setColor("#0000FF");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="#0000FF" />'
    );
  });
});

describe("Square test", () => {
  it(" should render a #DEB887 background for square", () => {
    const shape = new Square();
    shape.setColor("#DEB887");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="#DEB887" />'
    );
  });
});


