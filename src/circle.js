export default class Circle {
  constructor(r) {
    this.r = r;
  }

  get radius() {
    return this.r;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.r * Math.PI;
  }
}
