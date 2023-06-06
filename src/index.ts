export function add(a: number, b: number) {
  return a + b;
}

export function add2(a: number, b: number) {
  if (a > 100 || b > 100) {
    throw new Error("入力値は100以下で");
  }
  return a + b;
}
