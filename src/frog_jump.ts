//X:initial position
//Y:Final position (equals o greater than Y)
//D: Jump Fixed distance
function solution(X: number, Y: number, D: number) {
  return (Y - X) % D === 0 ? (Y - X) / D : Math.floor((Y - X) / D) + 1;
}

// For example, given:
//   X = 10
//   Y = 85
//   D = 30

// the function should return 3, because the frog will be positioned as follows:

//         after the first jump, at position 10 + 30 = 40
//         after the second jump, at position 10 + 30 + 30 = 70
//         after the third jump, at position 10 + 30 + 30 + 30 = 100

const frogJump = () => console.log(solution(10, 85, 30));
export default frogJump;
