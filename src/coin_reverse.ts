const a = [1, 0, 1, 0, 1, 1];
const b = [1, 1, 0, 1, 1];
const c = [0, 1, 0];
const d = [0, 1, 1, 0];

const co = (A: number[] | null | undefined): number => {
  if (!A || (A && A.length <= 0)) {
    return 0;
  }
  let reversed = 0;

  for (let x = 0; x <= A.length - 2; x++) {
    if (x === A.length - 1) {
      break;
    }
    const prev = A[x];
    const next = A[x + 1];
    if (prev === next) {
      A[x] = A[x] === 0 ? 1 : 0;
      reversed++;
    }
  }
  return reversed;
};

console.log("a:", co(a));
console.log("b:", co(b));
console.log("c:", co(c));
console.log("d:", co(d));
