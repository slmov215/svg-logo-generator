
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;    
  }
  renderLogo(data) {
    shape = ``;
    return data;
  }
  renderShape() {
    let shape = `
      <svg 
        xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="200" height="200" fill='${this.bgColor}'/>
        ${this.renderLogo()}
        <text x="127" y="110" font-size="1.5em" fill='${this.textColor}'>${this.text}</text>
      </svg>
    `;

    return shape;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo(data) {
    logo = `
    <circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />
    // <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    `;
    super.renderLogo(data);
    return logo;
  };
  renderShape() {
    return super.renderShape();
  };
};

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo(data) {
    logo = `
    <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
    // <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    `;
    super.renderLogo(data);
    return logo;
  };
  renderShape() {
    return super.renderShape();
  };
};

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo(data) {
    logo = `
    <rect width="200" height="200" fill="${this.shapeColor}"/>
    // <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    `;
    super.renderLogo(data);
    return logo;
  };
  renderShape() {
    return super.renderShape();
  };
};
module.exports = { Shape, Circle, Triangle, Square } ;