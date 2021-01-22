function shift(A: number[]) {
  const lastElement = A[A.length - 1];
  console.log("LastE:", lastElement);
  const tmp = A.slice(0, A.length - 1);
  console.log(tmp);
  console.log([lastElement, ...tmp]);
  return [lastElement, ...tmp];
}

export default function cyclicRotation(A: number[], K: number) {
  let tmp = A;
  for (let i = 1; i <= K; i++) {
    tmp = shift(tmp);
  }
  return tmp;
}
