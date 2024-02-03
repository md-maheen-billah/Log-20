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
