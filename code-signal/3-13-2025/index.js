const solution = (songs, animations) => {
  const arr = [];

  for (let i = 0; i < songs.length; i += 1) {
    let songL = +songs[i].split(":")[1];

    for (let j = 0; j < animations.length; j += 1) {
      let animN = animations[j].split(":")[0];
      let animL = +animations[j].split(":")[1];

      if (songL % animL === 0) {
        arr.push(`${animN}:${songL / animL}`);
        break;
      }
    }
  }

  return arr;
};
