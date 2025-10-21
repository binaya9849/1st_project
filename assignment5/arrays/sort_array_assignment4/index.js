function sortArray(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    return sortedArr;
}
const numbers = [10, 5, 7, 3, 9];
console.log("Original Array:", numbers);
const sortedNumbers = sortArray(numbers);
console.log("Sorted Array:", sortedNumbers);
