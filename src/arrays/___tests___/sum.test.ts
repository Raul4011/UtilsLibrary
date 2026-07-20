import {describe,expect,it} from "vitest"

import {Sum} from "../sum"

describe("Sum()",()=>{
    it("should return 6 when receive [1,2,3]",()=>{
        expect(Sum([1,2,3])).toStrictEqual(6)
    })
})
