let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let target = 15;

function FindPairs(nums, targetNum) {
  let found = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == targetNum) {
        found.push(i + "-" + j);
      }
    }
  }
  console.log(found);
}
FindPairs(numbers, target);
