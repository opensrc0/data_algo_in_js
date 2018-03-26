var BulbSize = { "SMALL": 0, "MEDIUM": 1, "LARGE": 2 }
Object.freeze(BulbSize)

function Shape() {
    Shape.count++;
}
Shape.count = 0; //class variable shared by all instances.

Shape.prototype.area = function () {
    return 0;
};

Shape.prototype.perimeter = function () {
    return 0;
};

Shape.prototype.greeting = function () {
    console.log("Shape Created");
};

function Rectangle(w, l) {
    Shape.call(this);
    this.width = w;
    this.length = l;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setWidth = function (w) {
    this.width = w;
};

Rectangle.prototype.setLength = function (l) {
    this.length = l;
};

Rectangle.prototype.area = function () {
    return this.width * this.length;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.length);
};

function Circle(r) {
    Shape.call(this);
    this.radius = r;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setRadius = function (r) {
    this.radius = r;
};

Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
};

var width = 2;
var length = 3;
var rectangle = new Rectangle(width, length);
console.log("Rectangle width: " + width + " and length: " + length + " Area: " + rectangle.area() + " Perimeter: " + rectangle.perimeter());

var radius = 10;
var circle = new Circle(radius);
console.log("Circle radius: " + radius + " Area: " + circle.area() + " Perimeter: " + circle.perimeter());

console.log("Shape.count : " + Shape.count)
