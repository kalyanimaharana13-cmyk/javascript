// JavaScript Practice Questions - Set 5
// 1. Palindrome Number
// Question: Write a JavaScript program to palindrome number.
// The program should display:
// Enter the required input:
// Input:
// 121
// Expected Output:
// 121 is a Palindrome Number.
// Write the JavaScript code here:

let num = 121;
let palin_num = num.toString().split("").reverse().join("");

if (num == palin_num) {
  console.log(`${num} is a Palindrome Number.`);
  console.log(`------`);
}

// 2. Armstrong Number
// Question: Write a JavaScript program to armstrong number.
// The program should display:
// Enter the required input:
// Input:
// 153
// Expected Output:
// 153 is an Armstrong Number.
// Write the JavaScript code here:

let isArmstrong = 153;
let temp = isArmstrong;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** 3;
  temp = Math.floor(temp / 10); // here instead of Math.floor we also write parseInt
}
console.log(`${sum} is an Armstrong Number.`);
console.log(`------`);

// 3. Factorial
// Question: Write a JavaScript program to factorial.
// The program should display:
// Enter the required input:
// Input:
// 5
// Expected Output:
// Factorial = 120
// Write the JavaScript code here:

// let fact_input = 5;
let fact = 1;

for (let i = 1; i <= 5; i++) {
  fact *= i;
}
console.log(`Factorial = ${fact}`);
console.log(`------`);

// 4. Fibonacci Series
// Question: Write a JavaScript program to fibonacci series.

// The program should display:
// Enter the required input:
// Input:
// 10
// Expected Output:
// 0 1 1 2 3 5 8 13 21 34
// Write the JavaScript code here:

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 0; i < 8; i++) {
  var temp_fib = a + b;
  console.log(temp_fib);
  a = b;
  b = temp_fib;
}

console.log(`------`);

// 5. Prime Number
// Question: Write a JavaScript program to prime number.
// The program should display:
// Enter the required input:
// Input:
// 17
// Expected Output:
// 17 is a Prime Number.
// Write the JavaScript code here:

let isPrime = 17;

for (let i = 2; i < 17; i++) {
  if (isPrime % i == 0) {
    console.log(`Not Prime number`);
    break;
  } else {
    console.log(`${isPrime} is a Prime Number.`);
    break;
  }
}
console.log(`------`);

// 6. Perfect Number
// Question: Write a JavaScript program to perfect number.
// The program should display:
// Enter the required input:
// Input:
// 28
// Expected Output:
// 28 is a Perfect Number.
// Write the JavaScript code here:

let isPerfect = 28;
let dup_isPerfect = isPerfect;
let perfect_fact = 1;
let perfect_sum = 1;

for (let i = 1; i <= isPerfect; i++) {
  perfect_fact *= i;
}
perfect_sum += perfect_fact;
if (isPerfect == perfect_sum) {
  console.log(`${isPerfect} is a Perfect Number.`);
} else {
  console.log(`${isPerfect} isn't a Perfect Number.`);
}

//another type of perfect number
// let num = 6;
// let sum = 0;

// for(let i = 1; i < num; i++){
//     if(num % i == 0){
//         console.log(i)
//         sum +=i;
//     }
// }
// if(sum == num){
//     console.log(`${num} is perfect number`);
// }else{
//     console.log(`${num} isn't perfect number`);
// }

// 7. Strong Number
// Question: Write a JavaScript program to strong number.
// The program should display:
// Enter the required input:
// Input:
// 145
// Expected Output:
// 145 is a Strong Number.
// Write the JavaScript code here:
// 1 -> 1, 4 -> 1*2*3*4 = 24, 5 -> 1*2*3*4*5 = 120 sum = 145

let isStrong = 145;
let dup_strong = isStrong;
let sum_strong = 0;

while (dup_strong > 0) {
  let strong_digit = dup_strong % 10;
  let fact_strong = 1;

  for (let i = 1; i <= strong_digit; i++) {
    fact_strong *= i;
  }
  sum_strong += fact_strong;
  dup_strong = Math.floor(dup_strong / 10);
}

if (isStrong == sum_strong) {
  console.log(`${isStrong} is a Strong Number.`);
} else {
  console.log(`${isStrong} isn't a Strong Number.`);
}

// 8. Neon Number
// Question: Write a JavaScript program to neon number.
// The program should display:
// Enter the required input:
// Input:
// 9
// Expected Output:
// 9 is a Neon Number.
// Write the JavaScript code here:

let isNeon = 9;
let dup_neon = Math.sqrt(isNeon, 2);
let neon_sum = 0;

for (let i = 1; i <= isNeon; i++) {
  let neon_digit = dup_neon % 10;
  neon_sum += neon_digit;
  dup_neon = Math.floor(dup_neon / 10);
}

// 9. Automorphic Number
// Question: Write a JavaScript program to automorphic number.
// The program should display:
// Enter the required input:
// Input:
// 25
// Expected Output:
// 25 is an Automorphic Number.
// Write the JavaScript code here:

let auto_num = 25;
let dup_auto_num = String(auto_num);
let auto_square = String(auto_num * auto_num);

if (auto_square.includes(dup_auto_num)) {
  console.log(`${auto_num} is an Automorphic Number.`);
}

// 10. Harshad Number
// Question: Write a JavaScript program to harshad number.
// The program should display:
// Enter the required input:
// Input:
// 18
// Expected Output:
// 18 is a Harshad Number.
// Write the JavaScript code here:

let hars_num = 18;
let dup_hars_num = hars_num;
let hars_sum = 0;

while (dup_hars_num > 0) {
  let hars_lastDig = dup_hars_num % 10;
  hars_sum += hars_lastDig;
  dup_hars_num = parseInt(dup_hars_num / 10);
}

if (hars_num % hars_sum == 0) {
  console.log(`${hars_num} is a Harshad Number.`);
} else {
  console.log(`${hars_num} isn't a Harshad Number.`);
}
// 11. Leap Year
// Question: Write a JavaScript program to leap year.
// The program should display:
// Enter the required input:
// Input:
// 2024
// Expected Output:
// 2024 is a Leap Year.
// Write the JavaScript code here:

let isLeapYear = 2024;

if (isLeapYear % 400 === 0 && isLeapYear % 4 === 0 && isLeapYear % 100 !== 0) {
  console.log(`${isLeapYear} is a Leap Year.`);
} else {
  console.log(`${isLeapYear} isn't a Leap Year.`);
}

// 12. GCD (HCF)
// Question: Write a JavaScript program to gcd (hcf).
// The program should display:
// Enter the required input:
// Input:
// 24,36
// Expected Output:
// HCF = 12
// Write the JavaScript code here:

let fact_num1 = 24;
let fact_num2 = 36;
let strore_num1 = [];
let strore_num2 = [];
let common = [];

for (let i = 1; i <= fact_num1; i++) {
  if (fact_num1 % i == 0) {
    strore_num1.push(i);
  }
}
for (let j = 1; j <= fact_num2; j++) {
  if (fact_num2 % j == 0) {
    strore_num2.push(j);
  }
}

for (let i = 0; i < strore_num2.length; i++) {
  if (strore_num1.includes(strore_num2[i])) {
    common.push(strore_num2[i]);
  }
}

let hcf = common[common.length - 1];
console.log(`HCF = ${hcf}`);

// 13. LCM
// Question: Write a JavaScript program to lcm.
// The program should display:
// Enter the required input:
// Input:
// 12,18
// Expected Output:
// LCM = 36
// Write the JavaScript code here:

let lcm_num1 = 12;
let lcm_num2 = 18;
let multiple_num1 = [];
let multiple_num2 = [];
let lcm = [];

for (let i = 1; i <= lcm_num1; i++) {
  multiple_num1.push(lcm_num1 * i);
}
for (let j = 1; j <= lcm_num2; j++) {
  multiple_num2.push(lcm_num2 * j);
}

for (let i = 0; i < multiple_num2.length; i++) {
  if (multiple_num1.includes(multiple_num2[i])) {
    lcm.push(multiple_num2[i]);
    break;
  }
}

let main_lcm = lcm[lcm.length - 1];
console.log(`LCM = ${main_lcm}`);

// 14. Power of Number

// Question: Write a JavaScript program to power of number.
// The program should display:
// Enter the required input:
// Input:
// 2,5
// Expected Output:
// 32
// Write the JavaScript code here:

console.log(`Power of 2^5 = ${Math.pow(2, 5)}`);

// 15. Decimal to Binary
// Question: Write a JavaScript program to decimal to binary.
// The program should display:
// Enter the required input:
// Input:
// 25
// Expected Output:
// 11001
// Write the JavaScript code here:

let conv_dec = 25;
let use_str = conv_dec.toString(2);

console.log(use_str);

// 16. Binary to Decimal
// Question: Write a JavaScript program to binary to decimal.
// The program should display:
// Enter the required input:
// Input:
// 1101
// Expected Output:
// 13
// Write the JavaScript code here:

// let deci_num = 1101;
// let power = 0;
// let decimal = 0; 

// while(deci_num > 0){
//     let deci_dig = deci_num % 10;
//     decimal = deci_dig * (2 ** power);
//     power++;
//     deci_num = Math.floor(deci_num /10);
// }

// console.log(decimal);


// 17. Count Digits
// Question: Write a JavaScript program to count digits.
// The program should display:
// Enter the required input:
// Input:
// 987654

// Expected Output:
// 6
// Write the JavaScript code here:

let count_num = 987654;
let con_str = String(count_num);
let count = 0;

for (let i = 0; i < con_str.length; i++) {
  count++;
}

console.log(count);
console.log(`------`);

// 18. Largest Digit
// Question: Write a JavaScript program to largest digit.
// The program should display:
// Enter the required input:
// Input:
// 59382
// Expected Output:
// 9
// Write the JavaScript code here:

let large_dig = 59382;
let string = String(large_dig);
let large_dig_idx = string[0];

for (let i = 0; i <= string.length; i++) {
  if (string[i] > large_dig_idx) {
    large_dig_idx = string[i];
  }
}

console.log(large_dig_idx);
console.log(`------`);

// 19. Smallest Digit
// Question: Write a JavaScript program to smallest digit.
// The program should display:
// Enter the required input:
// Input:
// 59382
// Expected Output:
// 2
// Write the JavaScript code here:

let small_dig = 59382;
let conv_str = String(small_dig);
let conv_str_idx = conv_str[0];

for (let i = 0; i < conv_str.length; i++) {
  if (conv_str[i] < conv_str_idx) {
    conv_str_idx = conv_str[i];
  }
}

console.log(conv_str_idx);
console.log(`------`);

// 20. Reverse Number
// Question: Write a JavaScript program to reverse number.
// The program should display:
// Enter the required input:
// Input:
// 12345
// Expected Output:
// 54321
// Write the JavaScript code here:

let rev_num = 12345;
console.log(rev_num.toString().split("").reverse().join(""));
console.log(`------`);
