import { sortPackage } from "./sort";

const result = sortPackage({
  width: 120,
  height: 80,
  length: 60,
  mass: 10,
});

console.log("Package classification:", result);