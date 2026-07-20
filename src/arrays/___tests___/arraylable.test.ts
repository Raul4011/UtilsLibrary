import {describe,expect,test} from "vitest"

import {arraylable} from "../arraylable"

describe("arrayable()",()=>{
    test.each([
        [[1,2,3],[1,2,3]],
        [null,[]],
        [undefined,[]],
        [{},[]],
        ["hola",[]],
        [["value"],["value"]],
        [():void => {},[]]
    ])("arrayable(%s) should be %s",(input,expected) => {
        expect(arraylable(input)).toStrictEqual(expected)
    } )

    // it("arrayable([1,2,3] sholud be true)",()=>{
    //     expect(arraylable([1,2,3])).toStrictEqual([1,2,3])
    // })
    // it("arrayable(null) sholud be []",()=>{
    //     expect(arraylable(null)).toStrictEqual([])
    // })
    // it("arrayable(undefined) sholud be []",()=>{
    //     expect(arraylable(undefined)).toStrictEqual([])
    // })  


    
})


