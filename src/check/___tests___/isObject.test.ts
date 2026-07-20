import {describe, expect, it} from 'vitest';

import { isObject } from '../isObejct';

describe("isObject()",()=>{
    it("should return true when the value is an object",()=>{
        expect(isObject({})).toBe(true)
    })
    it("should return false when the value is not an object",()=>{
        expect(isObject(1)).toBe(false)
        expect(isObject("string")).toBe(false)
        expect(isObject([])).toBe(true)
        expect(isObject(null)).toBe(false)
        expect(isObject(undefined)).toBe(false)
    })

})


