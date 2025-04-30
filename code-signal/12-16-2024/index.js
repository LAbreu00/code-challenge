/*
P:
-input: string
-output: string
E:
D:
A:
-grab vowels and save their index
-move over the vowels into the next vowel, the last vowel goes to the first place
C:
*/
//carmen solution
const solution = (message) => {
  //find all vowels in the input string, put them in an array
  let splitMsg = message.split("");
  //hold vowels somewhere
  let vowels = "aieou";

  //returns a new array
  let filtered = splitMsg.filter((char) => {
    //which char is a vowel
    return vowels.includes(char);
  });

  //rotate the vowels
  let last = filtered.pop();
  filtered.unshift(last);
  console.log(filtered);

  for (let i = 0; i < splitMsg.length; i++) {
    let char = splitMsg[i];

    if (vowels.includes(char)) {
      //replace current vowel front char in filtered
      splitMsg[i] = filtered.shift();
    }
  }
  return splitMsg.join("");
};
