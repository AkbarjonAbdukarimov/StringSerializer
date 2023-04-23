class Serialize {
  constructor(public nums: Array<Number>) {}
  public str: String = "";
  public initialLength: number = this.nums.join("").length;
  public finalLength: number = 0;
  serialize(): void {
    for (let i = 0; i < this.nums.length; i++) {
      this.str += String.fromCharCode(this.nums[i] as number);
    }
    this.finalLength = this.str.length;
  }
  public logResults(): void {
    this.serialize();
    console.log("Initial length", this.initialLength);
    console.log("Final length", this.finalLength);
    console.log("Serialized string:", this.str);
  }
}
export default Serialize;
