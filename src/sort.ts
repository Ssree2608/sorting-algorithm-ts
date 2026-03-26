export type StackType = "STANDARD" | "SPECIAL" | "REJECTED";

export interface PackageDimensions {
  width: number;
  height: number;
  length: number;
  mass: number;
}

export function sortPackage({
  width,
  height,
  length,
  mass,
}: PackageDimensions): StackType {
  validateInputs(width, height, length, mass);

  const volume = width * height * length;

  const isBulky =
    volume >= 1_000_000 ||
    Math.max(width, height, length) >= 150;

  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) return "REJECTED";
  if (isBulky || isHeavy) return "SPECIAL";
  return "STANDARD";
}

function validateInputs(
  width: number,
  height: number,
  length: number,
  mass: number
): void {
  const values = [width, height, length, mass];

  if (values.some(v => typeof v !== "number" || isNaN(v))) {
    throw new Error("All inputs must be valid numbers");
  }

  if (values.some(v => v < 0)) {
    throw new Error("Dimensions and mass must be non-negative");
  }
}