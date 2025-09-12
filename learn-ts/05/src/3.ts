{
  class Pair<T, U> {
    constructor(private first: T, private second: U) {}
    getFirst(): T {
      return this.first;
    }
    getSecond(): U {
      return this.second;
    }
  }

  const pairs1 = new Pair(10, "A");
  const pairs2 = new Pair(10, 20);
  const pairs3 = new Pair("A", "B");
}
{
  interface Repository<T> {
    add(item: T): void;
    get(id: number): T | undefined;
  }

  class InMemoryRepository<T> implements Repository<T> {
    private items: T[] = [];
    add(item: T): void {
      this.items.push(item);
    }
    get(id: number): T | undefined {
      return this.items[id];
    }
  }

  interface User {
    id: number;
    name: string;
  }
  const userRepository = new InMemoryRepository<User>();
  userRepository.add({ id: 1, name: "kim" });
  console.log(userRepository.get(1));
  // 제네릭의 활용용도가 무궁무진!
}
