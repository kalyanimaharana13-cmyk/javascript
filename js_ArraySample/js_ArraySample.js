// Q1. Print all elements
// Sample Input: [2,5,1,8]
// Sample Output: 2 5 1 8

let sam_arr = [2, 5, 1, 8];
console.log(`1.Sample Output: ${sam_arr.join(" ")}`);

// Q2. Find sum
// Sample Input: [2,5,1,8]
// Sample Output: 16

let sum_arrs = [2, 5, 1, 8];
let sum_arr = 0;

for (let i = 0; i < sum_arrs.length; i++) {
  sum_arr += sum_arrs[i];
}

console.log(`2.Sample Output: ${sum_arr}`);

// Q3. Find average
// Sample Input: [2,4,6,8]
// Sample Output: 5

let avg_arrs = [2, 4, 6, 8];
let avg_sum = 0;

for (let i = 0; i < avg_arrs.length; i++) {
  avg_sum += avg_arrs[i];
}

let average = avg_sum / avg_arrs.length;
console.log(`3.Sample Output: ${average}`);

// Q4. Find largest
// Sample Input: [2,9,4,1]
// Sample Output: 9

let large_arr = [2, 9, 4, 1];
let max_arr = Math.max(...large_arr);
console.log(`4.Sample Output: ${max_arr}`);

// Q5. Find smallest
// Sample Input: [2,9,4,1]
// Sample Output: 1

let small_arr = [2, 9, 4, 1];
console.log(`5.Sample Output: ${Math.min(...small_arr)}`);

// Q6. Find second largest
// Sample Input: [2,9,4,7]
// Sample Output: 7

let sec_largest = [2, 9, 4, 7];
let store_secLarge1 = sec_largest[0];
let store_secLarge2 = -Infinity;

for (let i = 1; i < sec_largest.length; i++) {
  if (sec_largest[i] > store_secLarge1) {
    store_secLarge2 = store_secLarge1;
    store_secLarge1 = sec_largest[i];
  } else if (
    sec_largest[i] > store_secLarge2 &&
    sec_largest[i] < store_secLarge2
  ) {
    store_secLarge2 = sec_largest[i];
  }
}

console.log(`6.Lagest Value = ${store_secLarge1}`);
console.log(`  Second Largest = ${store_secLarge2}`);

// Q7. Count even
// Sample Input: [2,5,8,7]
// Sample Output: 2

let count_even = [2, 5, 8, 7];
let count_elem = 0;

for (let i = 0; i < count_even.length; i++) {
  if (count_even[i] % 2 === 0) {
    count_elem++;
  }
}
console.log(`7.Sample Output: ${count_elem}`);

// Q8. Count odd
// Sample Input: [2,5,8,7]
// Sample Output: 2

let count_odd = [2, 5, 8, 7];
let count_OddElem = 0;

for (let i = 0; i < count_odd.length; i++) {
  if (count_even[i] % 2 === 1) {
    count_OddElem++;
  }
}
console.log(`8.Sample Output: ${count_OddElem}`);

// Q9. Reverse array
// Sample Input: [1,2,3]
// Sample Output: [3,2,1]

let reverse_arrInput = [1, 2, 3];
let reverse_arr = reverse_arrInput.toString().split("").reverse().join("");

console.log(`9.Sample Output:`, reverse_arrInput);

// Q10. Search element 8(linear search)
// Sample Input: Array:[2,8,5]
// Sample Output: Found

let search_elem = 8;
let search_arr = [2, 8, 5];
if (search_arr.includes(search_elem)) {
  console.log(`10.Sample Output: Found`);
} else {
  console.log(`10.Sample Output: Not Found`);
}

// Q11. Find index of 5
// Sample Input: Array:[2,8,5]
// Sample Output: 2

let find_arr = [2, 8, 5];
let find_idx = find_arr.indexOf(5);
console.log(`11.Sample Output: ${find_idx}`);

// Q12. Count occurrences of 2
// Sample Input: [2,1,2,4,2]
// Sample Output: 3

let occur_arr = [2, 1, 2, 4, 2];
let occur_idx = occur_arr[0];
let occur = 0;

for (let i = 0; i < occur_arr.length; i++) {
  if (occur_idx == occur_arr[i]) {
    occur++;
  }
}
console.log(`12.Sample Output: ${occur}`);

// Q13. Remove duplicates
// Sample Input: [1,2,2,3]
// Sample Output: [1,2,3]

let remove_dup = [1, 2, 2, 3];
let unique = [...new Set(remove_dup)];

console.log("13.Sample Output:", unique);

// Q14. Sort ascending
// Sample Input: [4,1,3]
// Sample Output: [1,3,4]

let sort_arr = [4, 1, 3];
console.log(`14.Sample Output:`, sort_arr.sort());

// Q15. Sort descending
// Sample Input: [4,1,3]
// Sample Output: [4,3,1]

let sort_desc = [4, 1, 3];

sort_desc.sort((a, b) => b - a);

console.log("15.Sample Output:", sort_desc);

// Q16. Merge arrays
// Sample Input: [1,2] & [3,4]
// Sample Output: [1,2,3,4]

let merge_arr1 = [1, 2];
let merge_arr2 = [3, 4];

console.log("16.Sample Output:", merge_arr1.concat(merge_arr2));

// Q17. Copy array
// Sample Input: [5,6,7]
// Sample Output: [5,6,7]

let org_arr = [5, 6, 7];
let dup_arr = org_arr;
console.log("17.Sample Output:", dup_arr);

// Q18. Even index elements
// Sample Input: [10,20,30,40,50]
// Sample Output: 10 30 50

let even_idx = [10, 20, 30, 40, 50];
let even_numIdx = [];

for (let i = 0; i < even_idx.length; i++) {
  if (i % 2 == 0) {
    even_numIdx.push(even_idx[i]);
  }
}
console.log(`18.Sample Output: ${even_numIdx.join(" ")}`);

// Q19. Odd index elements
// Sample Input: [10,20,30,40,50]
// Sample Output: 20 40

let odd_idx = [10, 20, 30, 40, 50];
let odd_numIdx = [];

for (let i = 0; i < odd_idx.length; i++) {
  if (i % 2 == 1) {
    odd_numIdx.push(odd_idx[i]);
  }
}
console.log(`19.Sample Output: ${odd_numIdx.join(" ")}`);

// Q20. Max-Min difference
// Sample Input: [2,9,4,1]
// Sample Output: 8

let min_maxArr = [2, 9, 4, 1];
let find_max_arr = Math.max(...min_maxArr);
let find_min_arr = Math.min(...min_maxArr);

console.log(`20.Sample Output: ${find_max_arr - find_min_arr}`);
