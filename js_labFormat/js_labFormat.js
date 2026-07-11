// 1. Find the Square of a Number
// Question: Enter a number and display its square.
// The program should display:
// Enter a number:
// Input:
// 6
// Expected Output:
// Square of 6 is: 36
// Write the JavaScript code here:

let num = Math.pow(6, 2);
console.log(num);

// 2. Find the Cube of a Number
// Question: Enter a number and display its cube.
// The program should display:
// Enter a number:
// Input:
// 4
// Expected Output:
// Cube of 4 is: 64
// Write the JavaScript code here:

let num1 = Math.pow(4, 3);
console.log(num1);

// 3. Celsius to Fahrenheit
// Question: Convert Celsius to Fahrenheit.
// The program should display:
// Enter temperature in Celsius:
// Input:
// 25
// Expected Output:
// Temperature in Fahrenheit is: 77
// Write the JavaScript code here:

let temp_C = 25;
let temp_F = temp_C * 1.8 + 32;
console.log(temp_F);

// 4. Check Positive, Negative, or Zero
// Question: Determine the type of the number.
// The program should display:
// Enter a number:
// Input:
// -5
// Expected Output:
// The number is Negative.
// Write the JavaScript code here:

let number = -5;
if (number >= 0) {
  console.log(`The number ${number}  is Positive`);
} else {
  console.log(`The number ${number}  is Negative`);
}

// 5. Find the Remainder
// Question: Find the remainder after division.
// The program should display:
// Enter first number:
// Enter second number:
// Input:
// 17 and 5
// Expected Output:
// Remainder is: 2
// Write the JavaScript code here:

let n1 = 17,
  n2 = 5;
let reminder = n1 % n2;
console.log(`The reminder of ${n1} and ${n2} is ${reminder}`);

// 6. Print Odd Numbers
// Question: Print all odd numbers from 1 to 25.
// The program should display:
// Printing odd numbers from 1 to 25
// Input:
// -
// Expected Output:
// 1 3 5 7 9 11 13 15 17 19 21 23 25
// Write the JavaScript code here:

for (let i = 1; i <= 25; i = i + 2) {
  console.log(i);
}

// 7. Sum of Even Numbers
// Question: Find the sum of even numbers from 1 to 20.
// The program should display:
// Calculating the sum of even numbers from 1 to 20
// Input:
// -
// Expected Output:
// Sum = 110
// Write the JavaScript code here:

let sum = 0;
for (let i = 0; i <= 20; i = i + 2) {
  sum += i;
}

console.log(sum);

// 8. Count Digits
// Question: Count the digits in a number.
// The program should display:
// Enter a number:
// Input:
// 45678
// Expected Output:
// Number of digits = 5
// Write the JavaScript code here:

let count = 0;
for (let i = 45678; i > 0; i = Math.floor(i / 10)) {
  count++;
}
console.log(count);

// 9. Sum of Digits
// Question: Calculate the sum of all digits.
// The program should display:
// Enter a number:
// Input:
// 1234
// Expected Output:
// Sum of digits = 10
// Write the JavaScript code here:

let digitNum = 1234;
let sumDigit = 0;
for (let i = digitNum; i > 0; i = Math.floor(i / 10)) {
  sumDigit = sumDigit + (i % 10);
}
console.log(sumDigit);

// 10. Check Palindrome
// Question: Check whether a number is a palindrome.
// The program should display:
// Enter a number:
// Input:
// 121
// Expected Output:
// 121 is a Palindrome.
// Write the JavaScript code here:

let palindromeNum = 121;
let reverse = Number(palindromeNum.toString().split("").reverse().join(""));

if (palindromeNum == reverse) {
  console.log(`The number is palindrome`);
} else {
  console.log(`The number is palindrome`);
}

// 11. Find the Average of Array Elements
// Question: Find the average of all array elements.
// The program should display:
// Array: [10, 20, 30, 40]
// Input:
// -
// Expected Output:
// Average = 25
// Write the JavaScript code here:

let arr = [10, 20, 30, 40];
let sumElement = 0;
for (let i = 0; i < arr.length; i++) {
  sumElement += arr[i];
}
let avg = sumElement / arr.length;
console.log(avg);

// 12. Print Odd Elements from an Array
// Question: Display only odd elements.
// The program should display:
// Array: [2, 3, 5, 8, 9]
// Input:
// -
// Expected Output:
// 3 5 9
// Write the JavaScript code here:

let oddElement = [2, 3, 5, 8, 9];
for (let i = 0; i < oddElement.length; i++) {
  if (oddElement[i] % 2 == 1) {
    console.log(oddElement[i]);
  }
}

// 13. Search an Element in an Array
// Question: Search a value in an array.
// The program should display:
// Array: [5, 10, 15, 20]
// Search value:
// Input:
// 15
// Expected Output:
// 15 is found in the array.
// Write the JavaScript code here:

let searchArray = [5, 10, 15, 20];
let searchInput = 15;
for (let i = 0; i < searchArray.length; i++) {
  if (searchInput == searchArray[i]) {
    console.log(`${searchInput} is the found in the array`);
  }
}

// 14. Find the Second Largest Element
// Question: Find the second largest value.
// The program should display:
// Array: [8, 2, 10, 6]
// Input:
// -
// Expected Output:
// Second largest element = 8
// Write the JavaScript code here:

let find_largestArr = [8, 2, 10, 6];
let find_idx = find_largestArr[0];
let find_idx2 = -Infinity;

for(let i = 1; i < find_largestArr.length; i++){
   if(find_largestArr[i] > find_idx){
      find_idx2 = find_idx;
      find_idx = find_largestArr[i];
   }else if(find_largestArr[i] < find_idx && find_largestArr[i] > find_idx2){
      find_idx2 = find_largestArr[i];
   }
}

console.log(find_idx);
console.log(find_idx2);


// 15. Count Positive and Negative Numbers
// Question: Count positive and negative values.
// The program should display:
// Array: [-2, 4, -1, 6, -5]
// Input:
// -
// Expected Output:
// Positive = 2, Negative = 3
// Write the JavaScript code here:

let countArr = [-2, 4, -1, 6, -5];
let count_NegElem = 0;
let count_PosElem = 0;
for (let i = 0; i < countArr.length; i++) {
  if (countArr[i] > 0) {
    count_PosElem++;
  } else if (countArr[i] < 0) {
    count_NegElem++;
  }
}
console.log(count_NegElem);
console.log(count_PosElem);
console.log(`Positive = ${count_PosElem}, Negative = ${count_NegElem}`);

// 16. Menu Driven Calculator
// Question: Perform arithmetic operations using a menu.
// The program should display:
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// Enter your choice:
// Input:
// Choice: 2, Numbers: 15 and 5
// Expected Output:
// Result = 10
// Write the JavaScript code here:

let choice = 2;
let num3 = 15;
let num4 = 5;

switch (choice) {
  case 1:
    console.log(`Result is ${num3 + num4}`);
    break;
  case 2:
    console.log(`Result is ${num3 - num4}`);
    break;
  case 3:
    console.log(`Result is ${num3 * num4}`);
    break;
  case 4:
    console.log(`Result is ${num3 / num4}`);
    break;
  default:
    console.log(`Result is invalid`);
}

// 17. Menu for Square and Cube
// Question: Choose square or cube from a menu.
// The program should display:
// 1. Square
// 2. Cube
// Enter your choice:
// Input:
// Choice: 1, Number: 7
// Expected Output:
// Square of 7 is: 49
// Write the JavaScript code here:

let menu = 1;
let menu_number = 7;

switch (menu) {
  case 1:
    console.log(`Result is ${Math.pow(7, 2)}`);
    break;
  case 2:
    console.log(`Result is ${Math.pow(7, 3)}`);
    break;
  default:
    console.log(`Result is invalid`);
}

// 18. Menu for Number Checking
// Question: Choose Even/Odd or Positive/Negative.
// The program should display:
// 1. Even or Odd
// 2. Positive or Negative
// Enter your choice:
// Input:
// Choice: 1, Number: 12
// Expected Output:
// 12 is Even.
// Write the JavaScript code here:

let choose = 1;
let choose_number = 12;

switch (choose) {
  case 1:
    if (choose_number % 2 == 0) {
      console.log(`${choose_number} is Even`);
    } else {
      console.log(`${choose_number} is Odd`);
    }
    break;
  case 2:
    if (choose_number > 0) {
      console.log(`${choose_number} is Positive`);
    } else {
      console.log(`${choose_number} is Negative`);
    }
    break;
  default:
    console.log(`Result is invalid`);
}

// 19. Menu for Printing Numbers
// Question: Choose to print even or odd numbers.
// The program should display:
// 1. Print Even Numbers
// 2. Print Odd Numbers
// Enter your choice:
// Input:
// Choice: 2
// Expected Output:
// 1 3 5 7 9
// Write the JavaScript code here:

let chooseEve = 2;

switch (chooseEve) {
  case 1:
    console.log(`Even Numbers:`);
    for (let i = 0; i <= 10; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
    break;
  case 2:
    console.log(`Odd Numbers:`);
    for (let i = 1; i <= 10; i = i + 2) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
    break;
  default:
    console.log(`Result is invalid`);
}

// 20. Menu for Array Operations
// Question: Choose Sum, Largest, or Reverse.
// The program should display:
// 1. Sum
// 2. Largest
// 3. Reverse Array
// Enter your choice:
// Input:
// Choice: 3, Array: [1,2,3]
// Expected Output:
// Reversed Array = [3,2,1]
// Write the JavaScript code here:

let array_operntion = 3;
let arr_elems = [1, 2, 3];
let sum_arr = 0;
let arr_idx = arr[0];

switch (array_operntion) {
  case 1:
    console.log(`Sum elements of array:`);
    for (let i = 0; i < arr_elems.length; i++) {
      sum_arr += i;
    }
    console.log(sum_arr);
    break;
  case 2:
    for (let i = 1; i < arr_elems.length; i++) {
      arr_elems[i] > arr_idx;
      arr_idx = arr_elems[i];
    }
    console.log(arr_idx);
    break;
  case 3:
    console.log([...arr_elems].reverse());
}


