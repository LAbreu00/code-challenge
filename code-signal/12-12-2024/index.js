/*
P:
E:
D:
A:
C:
*/
//carmen solution
const solution = (inputStr) => {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  const arr = [];

  for (let i = 0; i < alph.length; i += 1) {
    if (!inputStr.includes(alph[i])) {
      arr.push(alph[i]);
    }
  }
  return arr;
};
