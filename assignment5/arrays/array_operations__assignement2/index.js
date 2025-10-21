const output = document.getElementById("output");
let numbers = [];
for (let i = 1; i <= 5; i++) {
    let num = prompt(`Enter Number ${i}:`);
    // Convert input to number
    num = Number(num);
    numbers.push(num);
}
console.log("Numbers:", numbers);
output.textContent += `Numbers: [${numbers.join(", ")}]\n`;
let searchNum = Number(prompt("Enter a Number to Search:"));
if (numbers.includes(searchNum)) {
    console.log(`Number ${searchNum} is found in the array.`);
    output.textContent += `Number ${searchNum} is found in the array.\n`;
} else {
    console.log(`Number ${searchNum} is NOT found in the array.`);
    output.textContent += `Number ${searchNum} is NOT found in the array.\n`;
}
numbers.pop();
console.log("Updated Numbers:", numbers);
output.textContent += `Updated Numbers: [${numbers.join(", ")}]\n`;
numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);
output.textContent += `Sorted Numbers: [${numbers.join(", ")}]`;
