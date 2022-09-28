export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get xAxis() {
    return this.x;
  }

  get yAxis() {
    return this.y;
  }

  get point() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}
