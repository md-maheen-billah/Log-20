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
