// An array A consisting of N different integers is given. The array contains
//integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.
// Write a function:
//     function solution(A);
// that, given an array A, returns the value of the missing element.
// For example, given array A such that:
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.
// Write an efficient algorithm for the following assumptions:
//         N is an integer within the range [0..100,000];
//         the elements of A are all distinct;
//         each element of array A is an integer within the range [1..(N + 1)].

//*******SOLUTION STARTS HERE **********/
const test = [10, 12, 15, 11, 13];

function solution(A: number[]) {
  if (A.length === 0) {
    return 1;
  }
  if (A.length === 1) {
    return A[0] + 1;
  }

  const sorted = A.sort((a, b) => (a < b ? -1 : 1));
  const missingElement = sorted.reduce((missing, current, idx, copyArray) => {
    if (!missing) {
      return current;
    }
    if (missing + 1 === current) {
      return current;
    } else {
      copyArray.splice(1); //Ejects early from reduce
      return missing + 1;
    }
  });
  //Check if its missing is same as last number in that case return te next element
  if (missingElement === sorted[sorted.length]) {
    return missingElement + 1;
  }
  return missingElement;
}

const permMissingElem = () => console.log(solution(test));
export default permMissingElem;
