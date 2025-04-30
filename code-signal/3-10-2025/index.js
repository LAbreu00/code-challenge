const solution = (commands) => {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < commands.length; i += 1) {
    if (commands[i][0] === "!") {
      commands[i] = commands[+commands[i].slice(1) - 1];
    }

    if (commands[i] === "cp") {
      first++;
    } else if (commands[i] === "ls") {
      second++;
    } else if (commands[i] === "mv") {
      third++;
    }
  }

  return [first, second, third];
};
