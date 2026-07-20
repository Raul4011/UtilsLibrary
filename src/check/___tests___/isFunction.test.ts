import {describe,expect,it} from "vitest"

import {isFunction} from "../isFunction"


describe("isFunction()",()=>{
    it("should return true when the value is a function",()=>{
        expect(isFunction(()=>{})).toBe(true)
    })
    it("should return false when the value is not a function",()=>{
        expect(isFunction(1)).toBe(false)
        expect(isFunction("string")).toBe(false)
        expect(isFunction({})).toBe(false)
        expect(isFunction([])).toBe(false)
        expect(isFunction(null)).toBe(false)
        expect(isFunction(undefined)).toBe(false)
    })
    it("should return true when the value is a async function",()=>{
        expect(isFunction(async ()=>{})).toBe(true)
    })
})