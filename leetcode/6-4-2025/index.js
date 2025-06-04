//my solution
var distributeCandies = function (candies, num_people) {
  const arr = Array(num_people).fill(0);

  let i = 0;
  let gift = 1;
  while (candies > 0) {
    arr[i] += gift;
    candies -= gift;
    gift < candies ? (gift += 1) : (gift = candies);
    i === num_people - 1 ? (i = 0) : (i += 1);
  }

  return arr;
};
