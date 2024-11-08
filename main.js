function factorial(number) {
  let result = 1;

  for (let i = 0; i < number; i++) {
    result = result * (number - i);

    // 1 * (3 - 0) = 3
    // 1 * (3 - 1) = 2
    // 1 * (3 - 2) = 1
  }
  return result
}

console.log(factorial(3));
// 3*2*1 = 6

console.log(factorial(4));
// 4*3*2*1 = 24
