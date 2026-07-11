// JavaScript Beginner Practice Questions - Set 3 (Detailed Lab Format)
// 1. Find the Area of a Rectangle
// Question: Write a JavaScript program to calculate the area of a rectangle by taking the length and breadth as input from the user.
// The program should display:
// Enter the length:
// Enter the breadth:
// Input:
// Length: 10
// Breadth: 5
// Expected Output:
// Area of Rectangle = 50
// Write the JavaScript code here:

function area_rectangle(a, b) {
  return `Area of Rectangle = ${a * b}`;
}

let len_bred = area_rectangle(10, 5);
console.log(len_bred);

// 2. Find the Simple Interest
// Question: Write a JavaScript program to calculate the Simple Interest using Principal, Rate and Time entered by the user.
// The program should display:
// Enter Principal Amount:
// Enter Rate of Interest:
// Enter Time (Years):
// Input:
// 5000
// 8
// 2
// Expected Output:
// Simple Interest = 800
// Write the JavaScript code here:

function Simple_interest(p, t, r) {
  return `Simple Interest = ${(p * t * r) / 100}`;
}

let final_result = Simple_interest(5000, 2, 8);
console.log(final_result);

// 3. Find the Largest of Three Numbers
// Question: Write a JavaScript program to accept three numbers and display the largest number.
// The program should display:
// Enter first number:
// Enter second number:
// Enter third number:
// Input:
// 10
// 25
// 18
// Expected Output:
// Largest Number = 25
// Write the JavaScript code here:

function largest(a, b, c) {
  if (a > b && a > c) {
    console.log(`Largest Number = ${a}`);
  } else if (b > a && b > c) {
    console.log(`Largest Number = ${b}`);
  } else {
    console.log(`Largest Number = ${c}`);
  }
}

largest(10, 25, 18);

// 4. Print Numbers in Reverse Order
// Question: Write a JavaScript program to print numbers from 20 to 1 using a loop.
// The program should display:
// Printing numbers from 20 to 1...
// Input:
// No input required
// Expected Output:
// 20 19 18 ... 1
// Write the JavaScript code here:

for (let i = 20; i >= 1; i--) {
  console.log(i);
}

// 5. Count Even and Odd Numbers
// Question: Write a JavaScript program to count the total even and odd numbers between 1 and 20.
// The program should display:
// Counting even and odd numbers from 1 to 20...
// Input:
// No input required
// Expected Output:
// Even Numbers = 10
// Odd Numbers = 10
// Write the JavaScript code here:

let even_count = 0;
let odd_count = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    even_count++;
  } else {
    odd_count++;
  }
}
console.log(`Even Numbers = ${even_count}`);
console.log(`Odd Numbers = ${odd_count}`);

// 6. Find the Smallest Element in an Array
// Question: Write a JavaScript program to find the smallest element from a given array.
// The program should display:
// Array: [15, 8, 22, 4, 10]
// Input:
// No input required
// Expected Output:
// Smallest Element = 4
// Write the JavaScript code here:

let arr = [15, 8, 22, 4, 10];
let first_idx = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < first_idx) {
    first_idx = arr[i];
  }
}

console.log(`Smallest Element = ${first_idx} `);

// 7. Count Occurrences of an Element
// Question: Write a JavaScript program to count how many times a particular element occurs in an array.
// The program should display:
// Array: [2, 4, 2, 6, 2, 8]
// Enter the element to search:
// Input:
// 2
// Expected Output:
// 2 appears 3 times.
// Write the JavaScript code here:

let array = [2, 4, 2, 6, 2, 8];
let count_elem = array[0];
let count_times = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] == count_elem) {
    count_times++;
  }
}
console.log(`2 appears ${count_times} times.`);

// 8. Menu-Driven Grade Calculator
// Question: Write a menu-driven JavaScript program to calculate the grade based on marks entered by the user.
// The prgram should display:
// Enter your choice:
// Input:
// Choice: 1
// Marks: 85
// Expected Output:
// ===== MENU =====
// 1. Calculate Grade
// 2. Exit
// Grade = A
// Write the JavaScript code here:

let choice = 1;
let grade = 85;

console.log(`===== MENU =====`);
console.log(`1. Calculate Grade`);
console.log(`2. Exit`);


switch (choice) {
  case 1:
    if (grade >= 80 && grade <= 85) {
      console.log(`Grade = A `);
    }else if(grade <= 85 && grade == 100) {
      console.log(`Grade = A++`);
    }
    break;
  case 2:
    break;
  default:
    console.log("Invalid input");
}

// 9. Menu-Driven Maximum or Minimum
// Question: Write a menu-driven JavaScript program to find either the maximum or minimum of two numbers.
// The program should display:
// 1. Find Maximum
// 2. Find Minimum
// Enter your choice:
// Enter two numbers:
// Input:
// Choice: 2
// 15
// 9
// Expected Output:
// Minimum Number = 9
// Write the JavaScript code here:

function max_min(choice, a, b) {
  switch (choice) {
    case 1:
      if (a > b) {
        console.log(`Maximum Number = ${a}`);
      } else {
        console.log(`Maximum Number = ${b}`);
      }
      break;
    case 2:
      if (b > a) {
        console.log(`Minimum Number = ${b}`);
      } else {
        console.log(`Maximum Number = ${a}`);
      }
      break;
    default:
      console.log("Invalid");
  }
}
max_min(2, 15, 9);

// 10. Menu-Driven Array Operations
// Question: Write a menu-driven JavaScript program to perform array operations.
// The program should display:
// ===== ARRAY MENU =====
// 1. Display Array
// 2. Count Elements
// 3. Find Average
// Enter your choice:
// Input:
// Choice: 3
// Array: [10, 20, 30, 40]
// Expected Output:
// Average = 25
// Write the JavaScript code here:

let dis_arr = [10, 20, 30, 40];
let count_element = 0;
let sum = 0;
let choice_arr = 3;

console.log(`===== ARRAY MENU =====`);
console.log(`1. Display Array`);
console.log(`2. Count Elements`);
console.log(`3. Find Average`);


switch (choice_arr) {
  case 1:
    console.log([...dis_arr]);
    break;
  case 2:
    for (let i = 0; i < dis_arr.length; i++) {
      count_element++;
    }
    console.log(count_element);

    break;
  case 3:
    for (let i = 0; i < dis_arr.length; i++) {
      sum += dis_arr[i];
    }

    let avg = sum / dis_arr.length;
    console.log(`Average = ${avg}`);
    break;
  default:
    console.log(`Invalid Choice`);
}
