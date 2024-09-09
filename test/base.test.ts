import { describe, expect, it } from "vitest";
import { sum } from "../src";

describe("base", () => {
  it("sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
