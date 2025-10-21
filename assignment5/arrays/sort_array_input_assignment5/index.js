function sortArray(numbers, order) {
    let sortedArr = numbers.slice();
    if (order === "asc") {
        sortedArr.sort((a, b) => a - b); 
    } else if (order === "desc") {
        sortedArr.sort((a, b) => b - a); 
    } else {
        console.warn("Invalid order parameter. Use 'asc' or 'desc'.");
    }
    return sortedArr;
}
const numbers1 = [5, 2, 8, 1, 9];
const numbers2 = [10, 4, 7, 3, 6];
console.log("Original Array 1:", numbers1);
console.log("Ascending:", sortArray(numbers1, "asc"));   
console.log("Descending:", sortArray(numbers1, "desc")); 
console.log("Original Array 2:", numbers2);
console.log("Ascending:", sortArray(numbers2, "asc"));  
console.log("Descending:", sortArray(numbers2, "desc")); 
