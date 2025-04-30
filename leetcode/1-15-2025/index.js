/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
  let inc = false;
  let dec = false;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] < nums[i]) {
      inc = true;
    } else if (nums[i - 1] > nums[i]) {
      dec = true;
    }
  }

  return inc && dec ? false : true;
};
