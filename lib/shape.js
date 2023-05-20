
class Shape {
  constructor(width, height, text, textColor, logoColor) {
    this.width = width;
    this.height = height;
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;    
  }
}

class Circle extends Shape {
  constructor(this, width, height, text, textColor, logoColor, shapeColor) {
    super(width, height, text, textColor, logoColor);
    this.shapeColor = shapeColor;
  }
}

module.exports = shape ;