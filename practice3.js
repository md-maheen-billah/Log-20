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
