import {describe, expect, it} from 'vitest';

import { isNullorUndefined } from '../isNullorUndefined';

describe("isNullorUndefined()",()=>{
    it("should return true when value is null",()=>{
        expect(isNullorUndefined(null)).toBe(true)
    })
    it("should return true when value is undefined",()=>{
        expect(isNullorUndefined(undefined)).toBe(true)
    })
    it("should return false when value is not null or undefined",()=>{
        expect(isNullorUndefined(0)).toBe(false)
        expect(isNullorUndefined("")).toBe(false)
        expect(isNullorUndefined([])).toBe(false)
        expect(isNullorUndefined({})).toBe(false)     
    })      
})