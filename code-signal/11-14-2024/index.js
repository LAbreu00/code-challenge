const solution = (arr) => {
  let newArr = [];

  for (i = 0; i < arr.length - 2; i += 1) {
    const a = arr[i];
    const b = arr[i + 1];
    const c = arr[i + 2];

    // console.log( a + b > c )
    // console.log( a + c > b )
    // console.log( b + c > a )

    if (a + b > c && a + c > b && b + c > a) {
      newArr.push(1);
    } else {
      newArr.push(0);
    }
  }

  return newArr;
};
