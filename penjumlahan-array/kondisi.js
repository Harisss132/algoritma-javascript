function conditionnalSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] > 10) {
      total += arr[i];
    }
  }
  return total;
}

console.log(conditionnalSum([1, 2, 5, 8, 10, 15]));