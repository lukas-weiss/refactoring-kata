import logger from "./Logger.js";
import Point from "./point.js";
import Rectangle from "./rectangle.js";
import Square from "./square.js";
import Circle from "./circle.js";

logger.info("Coding Dojo refactoring kata execution start");

function logArea(area, geometricShape) {
  logger.info({ area }, `calculated area for shape: ${geometricShape}`);
}

function create_points(x, y) {
  var point = new Point(x, y);
  console.log(point.point);
  return point;
}

const createRectangle = (a, b) => {
  const rectangle = new Rectangle(a, b);
  logger.info(rectangle);
  return rectangle;
};

const s = (a) => {
  const b = a;
  const sq = new Square(a, b);
  logger.info(sq);
  return sq;
};

function initCircle(radius) {
  let cir = new Circle(5);
  cir = new Circle(radius);
  return cir;
}

const point = create_points(2, 4);
const rectangle = createRectangle(4, 8);
const square = s(5);
let circle_created = initCircle(9);
circle_created = initCircle(12);

const rec_area = rectangle.area;
console.log(rec_area + " calculated area of rectangle");

var sarea = square.area;
logger.info({ area: sarea }, "calculated area of ", square.shapeName);

const circleArea = circle_created.area;
logArea(circleArea, "circle");

logger.info("Coding Dojo refactoring kata execution end");
