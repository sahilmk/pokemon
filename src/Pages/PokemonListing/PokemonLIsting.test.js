import TestMatchData from "./TestingFunction";

test("Get Pokemon Data", () => {
  expect(TestMatchData(5, 10)).toBe(15);
});
