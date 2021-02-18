const input = "aaaabbbccaa";
//output: [("a", 4), ("b", 3), ("c", 2), ("a", 2)]
type TypeResult = { previous: string; structure: { [key: string]: number } };

function solution(A: string) {
  const chars = A.split("");
  const result: TypeResult = chars.reduce(
    (acc, value) => {
      console.log(acc);
      if (acc.previous === value && acc.structure[value]) {
        acc.structure[value] = acc.structure[value] + 1;
      } else {
        acc.structure[value] = 1;
      }

      acc.previous = value;
      return acc;
    },
    { previous: "", structure: {} } as TypeResult
  );
  return result;
}

const excercise = () => console.log(solution(input));
export default excercise;
