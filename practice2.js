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
