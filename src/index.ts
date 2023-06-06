export function add(a: number, b: number) {
  return a + b;
}

export function add2(a: number, b: number) {
  if (a > 100 || b > 100) {
    throw new Error("入力値は100以下で");
  }
  return a + b;
}

export class RangeError extends Error {}

export function add3(a: number, b: number) {
  if (a > 100 || b > 100) {
    throw new RangeError("入力値は100以下で");
  }
  return a + b;
}
