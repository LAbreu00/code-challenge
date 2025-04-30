//prefixStrings

const solution = (strings, sources) => {
  const arr = [];
  const prefix = [];

  let pre = "";
  for (let str of strings) {
    pre += str;
    prefix.push(pre);
  }

  for (let i = 0; i < sources.length; i += 1) {
    // initial version

    // let str = strings[0]
    // let flag = false

    // for (let j = 1; j < strings.length + 1; j += 1) {
    //     if (str === sources[i]) {
    //         flag = true
    //         break
    //     } else {
    //         str += strings[j]
    //     }
    // }
    // arr.push(flag)

    arr.push(prefix.includes(sources[i]));
  }

  return arr;
};

// carmen solution
