//  a function that checks if a given word is a palindrome.

function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));  
