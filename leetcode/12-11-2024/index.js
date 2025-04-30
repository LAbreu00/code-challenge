/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 P:
 E:
 D:
 A:
 C:
 **/
/* first attempt
 const twoSum = (nums, target) => {
    const arr = [];
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 1; j < nums.length; j += 1) {
            if (nums[i] + nums[j] === target) {
                arr.push(i,j)
                return arr
            }
        }
    }
};
*/

const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i += 1) {
    let comp = target - nums[i];

    if (nums[i] in obj) {
      return [obj[nums[i]], i];
    } else {
      obj[comp] = i;
    }
  }
};
