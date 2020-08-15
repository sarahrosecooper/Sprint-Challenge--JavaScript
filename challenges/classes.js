// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume = function () {
    return this.length * this.width * this.height;
  };
  surfaceArea = function () {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  };
}

let cuboid = new CuboidMaker(4, 5, 5);

console.log("testing", cuboid);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("the answer to classes test 1 is: the volume is:", cuboid.volume()); // 100
console.log(
  "the answer to classes test 2 is: the surface is:",
  cuboid.surfaceArea()
); // 130
