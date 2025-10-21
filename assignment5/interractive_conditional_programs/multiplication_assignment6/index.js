function tableGenerator() {
  const n = parseInt(document.getElementById('number').value);
  if (n <= 0) {
    document.getElementById('output').textContent = "Please enter a positive integer.";
    return;
  }
  let tableHTML = "<h2>Multiplication Table:</h2><table>";
  for (let i = 1; i <= n; i++) {
    tableHTML += "<tr>";
    for (let j = 1; j <= n; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";

  document.getElementById('output').innerHTML = tableHTML;
}
