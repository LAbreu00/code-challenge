/* first attempt
const solution = (prices, ratings) => {
  let result = 0;
  let ratio = [];

  for (let i = 0; i < prices.length; i += 1) {
    ratio.push(ratings[i] / prices[i]);
  }

  for (let i = 1; i < prices.length; i += 1) {
    if (ratio[i] > ratio[result]) {
      result = i;
    }
  }
  return result;
};
*/

const solution = (prices, ratings) => {
  let result = 0;
  let max = 0;

  for (let i = 0; i < prices.length; i += 1) {
    let ratio = ratings[i] / prices[i];
    if (ratio > max) {
      max = ratio;
      result = i;
    }
  }
  return result;
};
