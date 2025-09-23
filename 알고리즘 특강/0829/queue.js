// 스택은 가장 뒤에 있는 애만 보고
// 큐는 가장 앞에 있는 애만 본다

// 큐 생성
let queue = [];

queue.push("월");
queue.push("화");
queue.push("수");
queue.push("목");
queue.push("금");
// 요기까지 같음

console.log(queue); 

// 큐에 가장 **앞의 값**을 확인
console.log(queue[0]);
// 가장 뒤의 값을 볼 수는 있지만 큐 자료 구조에 위배되는 것이다
// 가장 앞의 것만 보고, 뺄 수 있는 것이 큐

// 가장 앞의 값을 빼기
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(queue.length === 0); 

console.log(queue); 
