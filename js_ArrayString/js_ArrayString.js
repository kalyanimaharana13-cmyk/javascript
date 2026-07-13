// second minimum

let arr = [12, 10, 3, -7, 2];
let arr_idx1 = arr[0];
let arr_idx2 = +Infinity;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr_idx1) {
    arr_idx2 = arr_idx1;
    arr_idx1 = arr[i];
  } else if (arr[i] > arr_idx1 && arr[i] < arr_idx2) {
    arr_idx2 = arr[i];
  }
}
console.log(`Smallest is ${arr_idx1}`);
console.log(`Second Smallest is ${arr_idx2}`);

// JavaScript Practice Questions - Set 4 (Strings and Arrays)
// 1. Reverse a String
// Question: Write a JavaScript program to reverse a string entered by the user.
// The program should display:
// Enter a string:
// Input:
// Kalyani
// Expected Output:
// Reversed String = inaylaK
// Write the JavaScript code here:

let str = "Kalyani";
console.log(`Reversed String = ${str.split("").reverse().join("")}`);

// 2. Count Vowels in a String
// Question: Write a JavaScript program to count the number of vowels in a string.
// The program should display:
// Enter a string:
// Input:
// education
// Expected Output:
// Number of vowels = 5
// Write the JavaScript code here:

// let vowel = "education";
// for(let i = 0; i < vowel.length; i++){
//     if(vowel)
// }

// 3. Convert String to Uppercase
// Question: Write a JavaScript program to convert a string into uppercase letters.
// The program should display:
// Enter a string:
// Input:
// javascript
// Expected Output:
// Uppercase String = JAVASCRIPT
// Write the JavaScript code here:

let word = "javascript";
console.log(`Uppercase String = ${word.toUpperCase()}`);

// 4. Check Palindrome String
// Question: Write a JavaScript program to check whether a string is a palindrome.
// The program should display:
// Enter a string:
// Input:
// madam
// Expected Output:
// madam is a Palindrome String.
// Write the JavaScript code here:

let palindrome = "madam";
let reverse = palindrome.split("").reverse().join("");

if (palindrome == reverse) {
  console.log(`${palindrome} is a Palindrome String`);
} else {
  console.log(`${palindrome} isn't a Palindrome String`);
}

// 5. Find Length of a String
// Question: Write a JavaScript program to find the length of a string.
// The program should display:
// Enter a string:
// Input:
// frontend
// Expected Output:
// Length of String = 8
// Write the JavaScript code here:

let len_str = "frontend";
console.log(`Length of String = ${len_str.length}`);

// 6. Count Words in a Sentence
// Question: Write a JavaScript program to count the total words in a sentence.
// The program should display:
// Enter a sentence:
// Input:
// JavaScript is easy to learn
// Expected Output:
// Total Words = 5
// Write the JavaScript code here:

let sentence = "JavaScript is easy to learn";
let word_arr = sentence.trim().split(" ");

console.log(`Total Words = ${[...word_arr].length}`);

// 7. Find First Character
// Question: Write a JavaScript program to display the first character of a string.
// The program should display:
// Enter a string:
// Input:
// BCA
// Expected Output:
// First Character = B
// Write the JavaScript code here:

let character = "BCA";
console.log(`First Character = ${character.charAt(0)}`);

// 8. Replace a Word in a String
// Question: Write a JavaScript program to replace one word with another word in a sentence.
// The program should display:
// Enter a sentence:
// Enter the word to replace:
// Enter the new word:
// Input:
// I like Java
// Java
// JavaScript
// Expected Output:
// Updated Sentence = I like JavaScript
// Write the JavaScript code here:

let first_word = "I like Java";
let second_word = "JavaScript";

console.log(`Updated Sentence = ${first_word.replace("Java", second_word)}`);

// 9. Print Each Character Using Loop
// Question: Write a JavaScript program to print each character of a string using a loop.
// The program should display:
// Enter a string:
// Input:
// CODE
// Expected Output:
// C
// O
// D
// E
// Write the JavaScript code here:

let each_char = "CODE";
let each_arr = each_char.trim().split("");

for (let i = 0; i < each_arr.length; i++) {
  console.log(each_arr[i]);
}

// 10. Menu-Driven String Operations
// Question: Write a menu-driven JavaScript program for string operations.
// The program should display:
// 1. Convert to Uppercase
// 2. Convert to Lowercase
// 3. Find Length
// Enter your choice:
// Input:
// Choice: 1
// String: hello
// Expected Output:
// Result = HELLO
// Write the JavaScript code here:

let choice = 1;
let string = "hello";

switch (choice) {
  case 1:
    console.log(`Result = ${string.toUpperCase()}`);
    break;
  case 2:
    console.log(`Result = ${string.toLowerCase()}`);
    break;
  case 3:
    console.log(`Result = ${string.length}`);
    break;
    dafault: console.log(`Result is invalid`);
    break;
}

// 11. Find the Longest String in an Array Question: Write a JavaScript program to find the longest string in an array.
// The program should display:
// Array = ['apple', 'banana', 'kiwi', 'watermelon']
// Input:
// No input required
// Expected Output:
// Longest String = watermelon
// Write the JavaScript code here:

let long_str = ["apple", "banana", "kiwi", "watermelon"];
let long_str_idx = long_str[0];

for (let i = 0; i < long_str.length; i++) {
  if (long_str[i].length > long_str_idx.length) {
    long_str_idx = long_str[i];
  }
}
console.log(`Longest String = ${long_str_idx}`);

// 12. Sort String Array Alphabetically
// Question: Write a JavaScript program to sort an array of strings in alphabetical order.
// The program should display:
// Array = ['Mango', 'Apple', 'Banana', 'Orange']
// Input:
// No input required
// Expected Output:
// Sorted Array = ['Apple', 'Banana', 'Mango', 'Orange']
// Write the JavaScript code here:

let arr_sort = ["Apple", "Banana", "Mango", "Orange"];

console.log(`Sorted Array = ${arr_sort.sort()}`);

// 13. Search a String in an Array
// Question: Write a JavaScript program to search for a string in an array.
// The program should display:
// Array = ['red', 'blue', 'green', 'yellow']
// Enter the string to search:
// Input:
// green
// Expected Output:
// green is found in the array.
// Write the JavaScript code here:

let find_arr = ["red", "blue", "green", "yellow"];
let color_arr = "green";

if (find_arr.includes(color_arr)) {
  console.log(`${color_arr} is found in the array.`);
}

// 14. Count Names Starting with a Letter
// Question: Write a JavaScript program to count how many names start with a given letter.
// The program should display:
// Array = ['Kalyani', 'Aditya', 'Kali', 'Adi']
// Enter the starting letter:
// Input:
// K
// Expected Output:
// Count = 2
// Write the JavaScript code here:

let arr_first_idx = ["Kalyani", "Aditya", "Kali", "Adi"];
let letter = "K";
let cont_first_idx = 0;

for (let i = 0; i < arr_first_idx.length; i++) {
  if (arr_first_idx[i].charAt(0) == letter) {
    cont_first_idx++;
  }
}

console.log(`Count = ${cont_first_idx}`);

// 15. Join Array Elements
// Question: Write a JavaScript program to join all string elements of an array into a single sentence.
// The program should display:
// Array = ['I', 'love', 'JavaScript']
// Input:
// No input required
// Expected Output:
// Joined String = I love JavaScript
// Write the JavaScript code here:

let join_arr = ["I", "love", "JavaScript"];

console.log(`Joined String = ${join_arr.join(" ")} `);

// 16. Reverse Array of Strings
// Question: Write a JavaScript program to reverse the order of strings in an array.
// The program should display:
// Array = ['HTML', 'CSS', 'JavaScript']
// Input:
// No input required
// Expected Output:
// Reversed Array = ['JavaScript', 'CSS', 'HTML']
// Write the JavaScript code here:

let reverse_arr = ["HTML", "CSS", "JavaScript"];
let arr_elem = reverse_arr.reverse();
console.log("Reversed Array =", arr_elem);

// 17. Find Common Strings
// Question: Write a JavaScript program to find common strings between two arrays.
// The program should display:
// Array 1 = ['apple', 'banana', 'orange']
// Array 2 = ['banana', 'grapes', 'orange']
// Input:
// No input required
// Expected Output:
// Common Strings = ['banana', 'orange']
// Write the JavaScript code here:

let arr1 = ["apple", "banana", "orange"];
let arr2 = ["banana", "grapes", "orange"];
let store_idx = [];

for (let i = 0; i < arr2.length; i++) {
  if (arr1.includes(arr2[i])) {
    store_idx.push(arr2[i]);
  }
}

console.log(`Common Strings = `, store_idx);

// 18. Menu-Driven Array of Strings
// Question: Write a menu-driven JavaScript program for string array operations.
// The program should display:
// 1. Display Array
// 2. Sort Array
// 3. Reverse Array
// Enter your choice:
// Input:
// Choice: 2
// Array = ['Mango', 'Apple', 'Banana']
// Expected Output:
// Sorted Array = ['Apple', 'Banana', 'Mango']
// Write the JavaScript code here:

let choice_num = 2;
let choice_arr = ["Mango", "Apple", "Banana"];
console.log(`1. Display Array`);
console.log(`2. Sort Array`);
console.log(`3. Reverse Array`);

switch (choice_num) {
  case 1:
    console.log(...choice_arr);
    break;
  case 2:
    console.log(choice_arr.sort());

    break;
  case 3:
    console.log(choice_arr.reverse());

    break;
  default:
    console.log("Invalid result");
}

// 19. Remove Duplicate Strings
// Question: Write a JavaScript program to remove duplicate strings from an array.
// The program should display:
// Array = ['apple', 'banana', 'apple', 'orange', 'banana']
// Input:
// No input required
// Expected Output:
// Unique Array = ['apple', 'banana', 'orange']
// Write the JavaScript code here:

let duplicate_arr = ["apple", "banana", "apple", "orange", "banana"];
console.log("Unique Array = ", [...new Set(duplicate_arr)]);

// 20. Count Total Characters in Array
// Question: Write a JavaScript program to count the total number of characters present in all strings of an array.
// The program should display:
// Array = ['HTML', 'CSS', 'JS']
// Input:
// No input required
// Expected Output:
// Total Characters = 9
// Write the JavaScript code here:

let count_arr = ["HTML", "CSS", "JS"];
let ind_char = count_arr.join("").split("");

console.log(`Total Characters = ${ind_char.length}`);
