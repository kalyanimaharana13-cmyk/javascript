// 13. Create array of 5 fruits and print.
// Example: ['Apple',...]
let arr = ["Apple", "Banana", "Pineapple", "Grapes", "Mango"];
console.log(arr);

// 14. Print all array elements.
// Example: 1 2 3
let arr1 = ["1", "2", "3", "4", "5"];
console.log(...arr1);

// 15. Find array length.
// Example: [1,2,3]=3

console.log(arr.length);

// 16. Find largest element.
// Example: [3,8,2]=8
let arr2 = ["3", "8", "2"];
console.log(Math.max(...arr2));

// 17. Find smallest element.
// Example: [3,8,2]=2
console.log(Math.min(...arr2));

// 18. Calculate sum of elements.
// Example: [2,4,6]=12
let sumElement = [2, 4, 6];
let sum = 0;
for (let el of sumElement) {
  sum += el;
}
console.log(sum);

// 19. Reverse an array.
// Example: [1,2,3]->[3,2,1]

function reverseArr(a) {
  return [...a].reverse();
}
let s = reverseArr([1, 2, 3]);
console.log(s);

// 20. Count even numbers. Example: [1,2,4,5]=2

let count = 0;
let countEven = [1, 2, 4, 5];
for (let i = 0; i < countEven.length; i++) {
  if (countEven[i] % 2 == 0) {
    count++;
  }
}
console.log(count);
