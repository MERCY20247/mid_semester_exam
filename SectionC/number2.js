// a function to find the sum of all even numbers in an array
function sumOfEvens(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumOfEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
