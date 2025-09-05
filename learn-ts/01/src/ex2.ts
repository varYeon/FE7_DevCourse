{
  // 연습문제+
  // 변수의 타입을 지정

  // 1.
  let employee: {
    id: number;
    name: string;
    contact: {
      email: string;
      phone: string;
    };
    department: string;
  } = {
    id: 123,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    department: "Engineering",
  };

  // 2.
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];

  // 3.
  let numbers: number[] = [10, 20, 30, 40, 50];

  // 4.
  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];

  // 5. *
  let nestedArray: [string[], number[], string[]] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];
  // 같응면?
  let nestedArray2: number[][] = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

  // 6.
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];

  // 7. *
  let items: [
    { id: number; name: string; price: number },
    { id: number; name: string; price: number },
    [string, number]
  ] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  // 8.
  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };

  // 9.
  let mixedData: [string, number, boolean, string, number] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];

  // 10.
  let company: {
    name: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  } = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
  };
}
