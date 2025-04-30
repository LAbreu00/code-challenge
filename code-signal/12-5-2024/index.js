/*
P:
input: arr
output: integer
E:
D:
A:
C:
*/

/* first attempt
const solution = (nums) => {
    const obj = {};
    for (let i = 0; i < nums.length; i += 1) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]] += 1
        }
    }
    
    for (const num in obj) {
        if (obj[num] === 1) {
            return +num
        }
    }

}
*/

const solution = (nums) => {
  const obj = {};
  for (let i = 0; i < nums.length; i += 1) {
    !obj[nums[i]] ? (obj[nums[i]] = 1) : (obj[nums[i]] += 1);
  }

  for (const num in obj) {
    if (obj[num] === 1) {
      return +num;
    }
  }
};
