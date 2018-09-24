// module.exports = function solveEquation(equation) {
function solveEquation() {
  const a = -20;
  const b = -108797540;
  const c = -130011773690520;
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  const arrOfRoots = [];

  if (discriminant == 0) {
    let root = -b / (2 * a);
    arrOfRoots.push(root);
    arrOfRoots.push(root);
  } else if (discriminant > 0) {
    let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    arrOfRoots.push(rootOne);
    arrOfRoots.push(rootTwo);
  }

  return arrOfRoots.sort((a, b) => a - b);
}

solveEquation();