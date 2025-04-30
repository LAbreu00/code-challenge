const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let revX = 0;

  while (x > revX) {
    revX = revX * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === revX || x === Math.floor(revX / 10);
};
