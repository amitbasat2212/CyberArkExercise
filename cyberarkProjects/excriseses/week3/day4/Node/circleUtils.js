const enemies = [
    { e: "Plastic" },
    { e: "Cigarettes" },
    { e: "The Man" }
]

for (let enemy of enemies) {
    console.log(enemy.e)
}

const title = "Circle Utility";
const pi = 3.14159;

const calcCircleArea = function (radius) {
  return pi * radius * radius;
};

module.exports.pi = pi;
module.exports.calcCircleArea = calcCircleArea;