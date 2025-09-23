// 스택에 데이터 넣기
let stack = [];

stack.push("월");
stack.push("화");
stack.push("수");
stack.push("목");
stack.push("금");

console.log(stack);

// 스택에 길이 확인
console.log(stack.length);

// 가장 마지막 데이터 확인 (top 확인)
console.log(stack[stack.length - 1]);

// pop
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
// 반복하며 스택을 전부 비울 수 있음

// 빈 스택 확인
console.log(stack.length === 0);

