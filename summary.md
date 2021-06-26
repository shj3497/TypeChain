## devDependencies

### @types/node

### ts-node

### tsc-watch : nodemon 같은것

### typescript

### crypto-js

## TypeScript Class 문법

1. public vs private
2. 일반 함수선언 vs static 붙여서 함수선언

```typescript
class Block {
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static hello1 = (): string => {
    return "hello1";
  };

  hello2 = (): string => {
    return "hello2";
  };
}
// static으로 선언했기때문에 생성자를 선언하지 않더라도 호출할 수 있다.
console.log(Block.hello1()); // hello1

// 생성자를 선언해야한다.
console.log(Block.hello2()); // Error

const blockChain: Block = new Block();
console.log(blockChain.hello2()); // hello2
```
