const solution = (length, breakpoints, actions) => {
  let val = 1;

  let i = 0;
  let j = 0;
  while (actions[i]) {
    if (val >= length) return length;

    if (actions[i] === "next") {
      val < length ? val++ : (val = length);
    } else if (actions[i] === "continue") {
      while (val >= breakpoints[j]) j++;
      breakpoints[j] ? (val = breakpoints[j]) : (val = length);
      j++;
    }
    i++;
  }
  return val;
};
