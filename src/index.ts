class Block{
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number,
  ){
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
}

const genesisBlock1:Block = new Block(0, "20202020", "", "Hello", 123456);

let blockChain: [Block] = [genesisBlock1];
console.log(blockChain);

export {};