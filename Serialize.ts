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
    console.log("-------------------");
    console.log("Test with ", this.initialLength);
    console.log("Initial length");
    console.log(this.initialLength);
    console.log("Final length");
    console.log(this.finalLength);
    console.log(this.nums);
  }
}
export default Serialize;
