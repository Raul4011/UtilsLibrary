

import { describe,expect,it } from "vitest";

import { includes } from "../includes";


describe("Includes()",()=>{
    it("includes('hola','ho') should be true",()=>{
        expect(includes('hola','ho')).toBe(true)
    })
    it("sholud return false if first argument is null",()=>{
        expect(includes(null,"hola")).toBe(false)
    })
    it("should return false if first argument is undefined",()=>{
       expect(includes(undefined,"hola")).toBe(false)
    })
    it("should return false if the first argument is a number",()=>{
        expect(includes(123,"hola")).toBe(false)
    })

})