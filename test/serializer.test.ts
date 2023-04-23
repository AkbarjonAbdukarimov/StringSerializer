import TestArray from "../GenerateArray";
import Serialize from "../Serialize";

test("Getting initial length", async () => {
  const serialize = new Serialize(TestArray.generatreArray(50));
  const diff = serialize.initialLength / serialize.finalLength;
  expect(diff).toBeGreaterThanOrEqual(2);
});
