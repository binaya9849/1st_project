const output = document.getElementById("output");
let numbers = [];
while (true) {
    let input = prompt("Enter a number or 'done' to finish:");
    
    if (input === null || input.toLowerCase() === "done") {
        break;
    }
    let num = Number(input);
    numbers.push(num);
}

let evenNumbers = [];
for (let num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}
if (evenNumbers.length > 0) {
    output.textContent = `Even Numbers: ${evenNumbers.join(", ")}`;
} else {
    output.textContent = `Even Numbers: None`;
}
console.log("Program completed.");
