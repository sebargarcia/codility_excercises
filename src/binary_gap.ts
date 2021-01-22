const x = 9; //1001; // 2
const y = 529; //1000010001; //4 y 3 => 4
const z = 20; //10100; //1
const w = 15; //1111; //0
const v = 32; //100000; //0
const n = 1041; //10000010001; //5 y 3 => 5

function positivetoBinary(x: number) {
  return (x >>> 0).toString(2);
}

function binaryGap(n: number) {
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

console.log(binaryGap(x));
console.log(binaryGap(y));
console.log(binaryGap(z));
console.log(binaryGap(w));
console.log(binaryGap(v));
console.log(binaryGap(n));
