import {describe,expect,test} from "vitest"

import {isString} from "../isString"


describe("isString",()=>{
    test.each([
        ["",true],
        ["hola",true],
        [5,false],
        [null,false],
        [undefined,false],
        [{},false]
    ])("isString('%s') should be %s", (input, expected) => {
        expect(isString(input)).toBe(expected);
    });
    // it("isString('') sholud be true",()=>{
    //     expect(isString("")).toBe(true)
    // })
    // it("isString(5) should be false",()=>{
    //     expect(isString(5)).toBe(false)
    // })
    // it('isString(null) should be false',()=>{
    //     expect(isString(null)).toBe(false)
    // })
    // it('isString(undefined) should be false',()=>{
    //     expect(isString(undefined)).toBe(false)
    // })
    // it('isString({}) should be false',()=>{
    //     expect(isString({})).toBe(false)
    // })       
})