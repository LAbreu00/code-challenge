function solution(finish, scooters) {
  let line = 0;
  let travel = 0;
  const sorted = scooters.sort((a, b) => a - b);

  let i = 0;
  while (line <= finish) {
    if (line === sorted[i]) {
      i++;
      line + 10 < finish ? (travel += 10) : (travel += finish - line);
      line += 10;
      console.log(line, sorted[i]);
    } else line++;

    while (line > sorted[i]) {
      i++;
    }
  }
  return travel;
}
