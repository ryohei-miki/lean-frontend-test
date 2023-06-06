import { add, add2, add3, RangeError } from "./index";

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
    expect(() => add2(120, 1)).toThrow("入力値は100以下で");
  });
  test("RengeError", () => {
    expect(() => add3(103, 119)).toThrow(RangeError);
  });
});

describe("真偽値", () => {
  test("true", () => {
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect("test").toBeTruthy();
    expect({}).toBeTruthy();
    // わかり辛い
    expect(false).not.toBeTruthy();
    expect(0).not.toBeTruthy();
    expect("").not.toBeTruthy();
    expect(null).not.toBeTruthy();
    expect(undefined).not.toBeTruthy();
  });
  test("false", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
});

describe("数値", () => {});
describe("文字列", () => {});
describe("配列", () => {});
describe("オブジェクト", () => {});
