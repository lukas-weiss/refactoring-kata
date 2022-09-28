export default class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.a * this.b;
  }
}
