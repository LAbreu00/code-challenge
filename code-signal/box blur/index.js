/*
input: matrix, array of arrays, intergers 0 -> 255
output: matrix, array of arrays, intergers 0 -> 255

ex:
[[1, 1, 1],  [1,1]. --> [[1]]
 [1, 7, 1],    --> 7 = [i][j]
 [1, 1, 1]]
 
 [[36,0,18,9,9], 
 [27,54,9,0,8], 
 [81,63,72,45,7]
 [1,2,3,4,5],
 [6,7,8,9,1]]
 
 algo:
 
 1. create empty output array 
 2. loop through the center intergers of the given matrix
    3. add the surounding numbers, divide by nine, and then round down
    4. push calculated integer into output matrix

*/
function solution(image) {
  const output = [];

  for (let i = 1; i < image.length - 1; i++) {
    const inner = [];
    for (let j = 1; j < image[0].length - 1; j++) {
      let num = 0; //find way to optimize adding all these numbers
      for (let l = -1; l < 2; l++) {
        for (let k = -1; k < 2; k++) {
          num += image[i + l][j + k];
        }
      }
      inner.push(Math.floor(num / 9));
      // inner.push(Math.floor(
      //     (image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
      //     image[i][j-1] + image[i][j] + image[i][j+1]
      //     + image[i+1][j-1] + image[i+1][j] + image[i+1][j+1])/9))
    }
    output.push(inner);
  }

  return output;
}
