function findmax(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  let index = 0;
  let counts = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
      counts = 1;
    } else if (arr[i] === max) counts++;
  }
  return { max, index, counts };
}

console.log(findmax([1, 2, 5, 6, 9, 7, 9]));
