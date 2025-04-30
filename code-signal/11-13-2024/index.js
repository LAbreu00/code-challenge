/*
## PEDAC
**Problem**
input: an integer and an array of integers
output: an integer
What is the task? How would you rephrase the problem in your own words? 

**Examples/Edge Case:** 
Come up with two of your own examples: 
input: initialHP = 12, deltas = [-4, -12, 6, 2]
output: 12 - 4 = 8 - 12 = -4 => 0 + 6 = 6 + 2 = 8

**Data Structure/Data Type**
What data structures will we use to solve this problem?
Are there any data types you will use? Any data type conversion? 
 
**Algorithm** 
How will you convert the input to output? 
Try out your algorithm with one of your examples/edge cases. Does it convert the input into the correct output? 
*/

/* first try
const solution = (initialHP, deltas) => {
    let curHp = initialHP
    
    for (let i = 0; i < deltas.length; i += 1) {
        console.log(curHp)
        if (curHp >= 100) {
            curHp = 100
        } else if (curHp <= 0) {
            curHp = 0
        }
        curHp += deltas[i]
    }
    
    if (curHp >= 100) {
            return 100
        } else if (curHp <= 0) {
            return 0
        } else {
            return curHp
        }

}

second try
const solution = (initialHP, deltas) => {
  let curHp = initialHP;

  deltas.forEach((level) => {
    if (curHp >= 100) {
      curHp = 100;
    } else if (curHp <= 0) {
      curHp = 0;
    }
    curHp += level;
  });

  if (curHp >= 100) {
    return 100;
  } else if (curHp <= 0) {
    return 0;
  } else {
    return curHp;
  }
};

irma solution 
const solution = (initialHP, deltas) => {
    let curHp = initialHP

    
    for (let i = 0; i < deltas.length; i += 1) {
        curHp += delta[i]

        if (curHp >= 100) {
            curHp = 100
        } else if (curHp <= 0) {
            curHp = 0
        }
    }
        
    return curHp
}
*/

//final
const solution = (initialHP, deltas) => {
  let curHp = initialHP;

  deltas.forEach((level) => {
    curHp += level;

    if (curHp >= 100) {
      curHp = 100;
    } else if (curHp <= 0) {
      curHp = 0;
    }
  });

  return curHp;
};
