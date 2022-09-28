export default class Square {
  constructor(a) {
    this.a = a;
  }

  get area() {
    return this.calcArea();
  }

  get shapeName() {
    return "square";
  }

  calcArea() {
    return this.a * this.a;
  }
}
