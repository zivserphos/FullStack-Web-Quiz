const findMissing = (arr1, arr2) =>
  arr1.reduce((a, num) => a + num, 0) - arr2.reduce((a, num) => a + num, 0);

console.log(findMissing([9, 5, 2, 13, 1], [2, 1, 13, 9]));
