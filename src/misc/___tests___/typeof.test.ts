import {describe,expect,it} from "vitest"

import { typeOf } from "../typeOf"


describe("typeOf()",()=>{
   it("should return null when value is null", () => {
    expect(typeOf(null)).toBe("null");
  });

  it("should return undefined when value is undefined", () => {
    expect(typeOf(undefined)).toBe("undefined");
  });

  it("should return string when value is a string", () => {
    expect(typeOf("hello")).toBe("string");
  });

  it("should return number when value is a number", () => {
    expect(typeOf(123)).toBe("number");
  });

  it("should return boolean when value is a boolean", () => {
    expect(typeOf(true)).toBe("boolean");
  });

  it("should return object when value is an object", () => {
    expect(typeOf({})).toBe("object");
  });

  it("should return object when value is an array", () => {
    expect(typeOf([])).toBe("object");
  });

  it("should return function when value is a function", () => {
    expect(typeOf(() => {})).toBe("function");
  });
})