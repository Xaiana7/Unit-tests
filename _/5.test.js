const prac5 = require("./5");
const fs = require("fs");
const testCases = JSON.parse(fs.readFileSync("./positive.json"));
const errorCases = JSON.parse(fs.readFileSync("./negative.json"));

testCases.forEach((testCase) => {
  describe(testCase.desc, () => {
    test(testCase.desc, () => {
      const { st, gr, result } = testCase;
      const res = prac5(st, gr);
      expect(res.Avg).toBeCloseTo(result.Avg, 0.01);
      for (let i = 0; i < result.resArr.length; ++i) {
        expect(res.resArr[i].name).toBe(result.resArr[i].name);
        expect(res.resArr[i].Nk).toBe(result.resArr[i].Nk);
        expect(res.resArr[i].Pk).toBeCloseTo(result.resArr[i].Pk, 0.01);
      }
    });
  });
});

errorCases.forEach((testCase) => {
  describe(testCase.desc, () => {
    test(testCase.desc, () => {
      const { st, gr, exep } = testCase;
      expect(() => prac5(st, gr)).toThrow(Error(exep));
    });
  });
});

test("negative test 11  - 1 arg", () => {
  expect(() => prac5(["Sidorov"])).toThrow(Error("Determination error!"));
});

test("negative test 12 - 3 arg", () => {
  expect(() => prac5(["Sidorov"], [["1"]], 1)).toThrow(
    Error("Determination error!")
  );
});
