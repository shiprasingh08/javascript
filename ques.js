// find the largest and smallest number in an array
let arr = [1,2,3,4,5,6,7,8,9,10];
let largest = arr[0];
let smallest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("Largest number is: " + largest);
console.log("Smallest number is: " + smallest);

//check if a number is a pallindrome
let num = 123;
let reversed = 0;
let original = num;
while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}
if (original === reversed) {
    console.log(original + " is a palindrome.");
} else {
    console.log(original + " is not a palindrome.");
}
//fizzbuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}