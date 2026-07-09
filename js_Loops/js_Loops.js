// 7. Print numbers 1 to 10.
// Example: 1 2 ...10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 8. Print even numbers 1 to 20.
// Example: 2 4 ...20
for (let i = 0; i <= 20; i = i + 2) {
  console.log(i);
}

// 9. Find sum of first 10 numbers.
// Example: Output:55
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 10. Print table of 7.
// Example: 7x1=7 ...
let i = 7;
for (let j = 1; j <= 10; j++) {
  console.log(`${i} * ${j} = ${i * j}`);
}

// 11. Find factorial of 5.
// Example: Output:120
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(factorial);

// 12. Reverse countdown 10 to 1.
// Example: 10 9 ...1

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
