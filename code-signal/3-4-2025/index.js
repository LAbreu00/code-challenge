const solution = (pattern, source) => {
  const vowels = "aeiouy";
  let count = 0;

  for (let i = 0; i <= source.length - pattern.length; i += 1) {
    let sub = source.substring(i, i + pattern.length);

    let miniCount = 0;
    for (let j = 0; j < pattern.length; j += 1) {
      if (+pattern[j] === 0) {
        if (vowels.includes(sub[j])) miniCount++;
      } else {
        if (!vowels.includes(sub[j])) miniCount++;
      }
    }
    miniCount === pattern.length ? count++ : 0;
  }

  return count;
};
