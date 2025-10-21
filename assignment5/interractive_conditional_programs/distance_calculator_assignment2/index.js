function Distancecalculate() {
  const x1 = parseFloat(document.getElementById('x1').value);
  const y1 = parseFloat(document.getElementById('y1').value);
  const x2 = parseFloat(document.getElementById('x2').value);
  const y2 = parseFloat(document.getElementById('y2').value);
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  document.getElementById('output').innerHTML = `
    The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is:<br>
    <strong>${distance.toFixed(2)}</strong>
  `;
}
