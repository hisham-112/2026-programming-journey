function getPositiveNumbers(numbers) {
  return numbers.filter((n) => n >= 0);
}
console.log(getPositiveNumbers([-10, 5, -3, 2, 0, -1, 4])); // [5, 2, 0, 4]