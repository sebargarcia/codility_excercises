// A binary gap within a positive integer N is any maximal sequence
//of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
//The number 529 has binary representation 1000010001 and contains two binary gaps:
//one of length 4 and one of length 3. The number 20 has binary representation
//10100 and contains one binary gap of length 1. The number 15 has binary representation
//1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
// Write a function:
//     function solution(N);
// that, given a positive integer N, returns the length of its longest binary gap.
//he function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary
//representation 10000010001 and so its longest binary gap is of length 5. Given N = 32
//the function should return 0, because N has binary representation '100000' and thus no binary gaps.
// Write an efficient algorithm for the following assumptions:
//         N is an integer within the range [1..2,147,483,647].

//*******SOLUTION STARTS HERE **********/

const x = 9; //1001; // 2
const y = 529; //1000010001; //4 y 3 => 4
const z = 20; //10100; //1
const w = 15; //1111; //0
const v = 32; //100000; //0
const n = 1041; //10000010001; //5 y 3 => 5

function positivetoBinary(x: number) {
  return (x >>> 0).toString(2);
}

function solution(n: number) {
  const binary = positivetoBinary(n);
  const nums = binary.split("");
  //console.log(JSON.stringify(nums));
  const gaps = [];
  //let _one = 0;
  let gap = 0;
  //Start from position 1 because position 0 is always "1"
  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i] === "0") {
      gap++;
    } else {
      gap === 0 ? [] : gaps.push(gap);
      gap = 0;
    }
  }

  if (gaps.length === 0) {
    return 0;
  }

  return gaps.reduce((acc, value) => (value > acc ? value : acc));
}

const binaryGap = () => {
  console.log(solution(x));
  console.log(solution(y));
  console.log(solution(z));
  console.log(solution(w));
  console.log(solution(v));
  console.log(solution(n));
};
export default binaryGap;
