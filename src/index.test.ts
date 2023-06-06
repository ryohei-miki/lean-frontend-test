import { add, add2 } from "./index";

// 基本
describe("四則演算", () => {
  describe("足し算", () => {
    test("1 + 2 は3である", () => {
      expect(add(1, 2)).toBe(3);
    });
    test("1 + 3 は4である", () => {
      expect(add(1, 3)).toBe(4);
    });
  });
});

describe("例外をthrow", () => {
  test("入力値が101以上", () => {
    expect(() => {
      add2(120, 100);
    }).toThrow();
  });
  test("メッセージ", () => {
    expect(() => {
      add2(120, 1);
    }).toThrow("入力値は100以下で");
  });
});
