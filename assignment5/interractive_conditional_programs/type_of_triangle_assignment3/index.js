function triangleChecker() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  if (!(a + b > c && a + c > b && b + c > a)) {
    document.getElementById('output').textContent = "These sides do not form a triangle.";
    return;
  }
  let type = "";
  if (a === b && b === c) {
    type = "Equilateral (all sides are equal)";
  } else if (a === b || b === c || a === c) {
    type = "Isosceles (two sides are equal)";
  } else if (a !== b && b !== c && a !== c) {
    type = "Scalene (no sides are equal)";
  }
  document.getElementById('output').innerHTML = `
    Triangle type: <strong>${type}</strong>
  `;
}
