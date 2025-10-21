function temperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    document.getElementById('output').innerHTML = `
    ${celsius.toFixed(2)}°C is equal to:<br>
    <strong>${fahrenheit.toFixed(2)}°F</strong> and <strong>${kelvin.toFixed(2)} K</strong>.
  `;
}
