module.exports = function solveEquation(equation) {
  const prepEquation = equation.replace(/\s/g, ""); // удаляем пробелы

  /* коэфф. перед х^2, сразу берём из массива */
  const a = prepEquation.match(/(-?\d+)(?:\*x\^2)/)[1];

  /* коэфф. после х^2, хотя лучше было бы искать перед х. Сразу берём из массива */
  const b = prepEquation.match(/(?:x\^2\+?)(-?\d+)/)[1];
  
  /* свободный коэфф., сразу берём из массива */
  const c = prepEquation.match(/-?\d+$/)[0];

  const discriminant = Math.pow(b, 2) - 4 * a * c;
  const arrOfRoots = [];

  if (discriminant == 0) {
    const root = -b / (2 * a);
    arrOfRoots.push(root);
    arrOfRoots.push(root);
  } else if (discriminant > 0) {
    const rootOne = (-b + Math.round(Math.sqrt(discriminant))) / (2 * a);
    const rootTwo = (-b - Math.round(Math.sqrt(discriminant))) / (2 * a);
    arrOfRoots.push(rootOne);
    arrOfRoots.push(rootTwo);
  }

  return arrOfRoots.sort((a, b) => a - b);
}