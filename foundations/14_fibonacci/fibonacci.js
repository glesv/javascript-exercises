const fibonacci = function (num) {
  if (typeof num === "string") {
    num = Number(num);
  }

  if (num === 0) return 0;
  if (num < 0) return "OOPS";

  if (num === "0") {
    num = 0;
  }

  let nums = [];
  let found = false;
  let iter = 0;

  while (found === false) {
    if (iter === 0 || iter === 1) {
      nums[iter] = 1;
    } else {
      nums[iter] = nums[iter - 1] + nums[iter - 2];
    }
    iter++;

    if (iter === num) {
      found = true;
    }

    console.log(nums);
  }

  return nums[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
