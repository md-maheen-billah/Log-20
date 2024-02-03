# Log 20 (Duration: 1/6 Months)
Today's lesson focused funtion, function parameters, how function works, argument vs parameters and function return.

---

### Practice Task-1:
Take four parameters. Multiply the four numbers and then return the result.
```js
function getMultiplication(num1, num2, num3, num4) {
  const result = num1 * num2 * num3 * num4;
  return result;
}
const output = getMultiplication(4, 5, 6, 7);
console.log(output);
// PS C:\Projects\Log-20> node practice1.js
// 840

```
---
### Practice Task-2:
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
```js
function evenOrOdd(number) {
  if (number % 2 === 1) {
    const multiply = number * 2;
    return multiply;
  } else {
    const multiply = number / 2;
    return multiply;
  }
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));
// PS C:\Projects\Log-20> node practice2.js
// 2
// 10

```
---
### Practice Task-3:
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
```js
function make_avg(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  const avg = sum / numbers.length;
  return avg;
}
const numbers = [5, 8, 91, 24, 6];
const avg = make_avg(numbers);
console.log(avg);
// PS C:\Projects\Log-20> node practice3.js
// 26.8

```
---
### Practice Task-4:
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
```js
function count_zero(numbers) {
  let count = 0;
  const zero = "0";
  for (const number of numbers) {
    if (number === zero) {
      count++;
    }
  }
  return count;
}
const numbers = "00110011001";
const count = count_zero(numbers);
console.log(count);
// PS C:\Projects\Log-20> node practice4.js
// 6

```
---
### Practice Task-5:
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`.
```js
function odd_even(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}
console.log(odd_even(10));
console.log(odd_even(5));
console.log(odd_even(3));
console.log(odd_even(14));
// PS C:\Projects\Log-20> node practice5.js
// Even
// Odd
// Odd
// Even

```
