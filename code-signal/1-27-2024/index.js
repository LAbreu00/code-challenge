const solution = (commands) => {
  const obj = {};
  let file = "";

  for (let i = 0; i < commands.length; i += 1) {
    let com = commands[i].split(" ")[0];
    let name = commands[i].split(" ")[1];

    if (com === "goto") {
      file = name;
      if (!obj[file]) {
        obj[file] = new Set();
      }
    } else if (com === "create") {
      obj[file].add(name);
    }
  }

  let max = 0;
  let maxName = "";
  for (let bucket in obj) {
    if (obj[bucket].size > max) {
      max = obj[bucket].size;
      maxName = bucket;
    }
  }
  return maxName;
};
