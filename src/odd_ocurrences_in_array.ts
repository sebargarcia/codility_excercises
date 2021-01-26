const test1 = [9, 3, 9, 3, 9, 7, 9];

function solution(A: number[]) {
  let dictionary: { [K: number]: { id: number; paired: number } } = {};

  for (let i = 0; i < A.length; i++) {
    const key = A[i];
    if (!dictionary[key]) {
      dictionary[key] = { id: A[i], paired: 1 };
    } else {
      dictionary[key] = { id: A[i], paired: dictionary[key].paired + 1 };
    }
  }
  const result = Object.values(dictionary).find(
    (item) => item.paired % 2 !== 0
  );
  return result?.id;
}

const oddOcurrencesInArray = () => console.log(solution(test1));
export default oddOcurrencesInArray;
