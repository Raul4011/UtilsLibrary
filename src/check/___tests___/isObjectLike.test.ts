import {describe, expect, test} from 'vitest';

import { isObjectLike } from '../isObjectLike';

// describe("isObjectLike()",()=>{
//     it("should return true when the value is object-like",()=>{
//         expect(isObjectLike({})).toBe(true)
//         expect(isObjectLike([])).toBe(false)
//     })
//     it("should return false when the value is not object-like",()=>{
//         expect(isObjectLike(1)).toBe(false)
//         expect(isObjectLike("string")).toBe(false)
//         expect(isObjectLike(null)).toBe(false)
//         expect(isObjectLike(undefined)).toBe(false)
//     })
// })
describe("isObjectLike()", () => {
    test.each([
        [{}, true],
        [{ name: "Augusto" }, true],
        [Object.create(null), true],
        [[], false],
        [[1, 2, 3], false],
        [new Date(), false],
        [/abc/, false],
        [null, false],
        [undefined, false],
        ["hola", false],
        [123, false],
        [true, false],
        [():void => {}, false],
    ])("isObjectLike(%o) should be %s", (input, expected) => {
        expect(isObjectLike(input)).toBe(expected);
    });
});