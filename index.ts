import TestArray from "./GenerateArray";
import Serialize from "./Serialize";

const ser50 = new Serialize(TestArray.generatreArray(50));

const ser100 = new Serialize(TestArray.generatreArray(100));

const ser300 = new Serialize(TestArray.generatreArray(300));

const ser500 = new Serialize(TestArray.generatreArray(500));

const ser1000 = new Serialize(TestArray.generatreArray(1000));
ser50.logResults();
ser100.logResults();
ser300.logResults();
ser500.logResults();
ser1000.logResults();
