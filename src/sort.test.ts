import { sortPackage } from "./sort";

describe("sortPackage", () => {
  it("returns STANDARD", () => {
    expect(
      sortPackage({ width: 50, height: 50, length: 50, mass: 10 })
    ).toBe("STANDARD");
  });

  it("returns SPECIAL for dimension >= 150", () => {
    expect(
      sortPackage({ width: 150, height: 10, length: 10, mass: 5 })
    ).toBe("SPECIAL");
  });

  it("returns SPECIAL for volume >= 1,000,000", () => {
    expect(
      sortPackage({ width: 100, height: 100, length: 100, mass: 10 })
    ).toBe("SPECIAL");
  });

  it("returns SPECIAL for mass >= 20", () => {
    expect(
      sortPackage({ width: 10, height: 10, length: 10, mass: 20 })
    ).toBe("SPECIAL");
  });

  it("returns REJECTED when bulky and heavy", () => {
    expect(
      sortPackage({ width: 200, height: 200, length: 200, mass: 25 })
    ).toBe("REJECTED");
  });

  it("throws error for negative values", () => {
    expect(() =>
      sortPackage({ width: -1, height: 10, length: 10, mass: 10 })
    ).toThrow();
  });

  it("throws error for invalid numbers", () => {
    expect(() =>
      sortPackage({ width: NaN, height: 10, length: 10, mass: 10 })
    ).toThrow();
  });
});