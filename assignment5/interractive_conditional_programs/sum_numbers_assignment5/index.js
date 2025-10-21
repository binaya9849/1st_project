function sumCalulcator() {
  const n = parseInt(document.getElementById('number').value);
  if (n <= 0) {
    document.getElementById('output').textContent = "Please enter a positive integer.";
    return;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById('output').innerHTML = `
    Sum of all natural numbers <strong>${n}</strong> is: <strong>${sum}</strong>
  `;
}
