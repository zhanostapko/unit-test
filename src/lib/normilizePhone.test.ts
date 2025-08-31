import { expect, test } from "vitest";
import { normalizePhone } from "./normilizePhone";

const testData = [
  { input: "", expected: "", description: "Should return empty string" },
  {
    input: "82828282",
    expected: "37182828282",
    description: "Should return the same",
  },
  {
    input: "37120220202",
    expected: "37120220202",
    description: "Should return the because of 371",
  },
  {
    input: "sda21231212321ddas",
    expected: "21231212321",
    description: "Should return only numbers",
  },
  {
    input: "3232332",
    expected: "3232332",
    description: "Should return because not starting with 8 return the same",
  },
  { input: "2323", expected: "2323", description: "Should add 371" },
];

test.each(testData)("$description", ({ input, expected }) =>
  expect(normalizePhone(input)).toBe(expected)
);
