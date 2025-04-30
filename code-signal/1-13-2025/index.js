//1. CheckStringAltering2:

const checkStringAltering2 = (inputStr) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];

  for (let i = 1; i < inputStr.length; i += 1) {
    let first = false;
    let second = false;

    if (vowels.includes(inputStr[i - 1])) first = true;
    if (vowels.includes(inputStr[i])) second = true;

    if (first === second) return i;
  }
  return -1;
};

// 2. AlmostSubstring:

const almostSubstring = (t, s) => {
  let result = 0;
  for (let i = 4; i < t.length; i += 1) {
    if (`${t[i - 4]}${t[i - 2]}${t[i]}` === s) result += 1;
  }
  return result;
};
