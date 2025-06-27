const myRules = [
  { condition: (num) => num % 3 === 0, output: 'Fizz' },
  { condition: (num) => num % 5 === 0, output: 'Buzz' },
  { condition: (num) => num > 10, output: 'Large' },
];

function superFizzBuzz(n, rules) {
  const result = [];
  for (let num = 1; num <= n; num++) {
    let output = '';
    for (const rule of rules) {
      if (rule.condition(num)) {
        output += rule.output + '';
      }
    }
    result.push(output.trim() || num);
  }
  return result;
}

console.log(superFizzBuzz(12, myRules));
