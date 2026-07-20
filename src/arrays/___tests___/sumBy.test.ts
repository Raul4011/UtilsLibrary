import {describe,expect,it} from "vitest"

import {sumBy} from "../sumBy"


describe("sumBy()",()=>{
    it("should sum every single number by the given accesor",()=>{
       const dataObj = [
        {value:2},
        {value:3},
        {value:5}
       ]
       const actual = sumBy(dataObj,(item)=>item?.value)
       
        expect(actual).toBe(10)
    })

})