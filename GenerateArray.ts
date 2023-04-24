class TestArray {
  public static generatreArray(length: number): Array<Number> {
    let nums: Array<Number> = [];
    for (let i = 0; i < length; i++) {
      nums.push(Math.floor(Math.random() * 301));
    }
    return nums;
  }
}
export default TestArray;
