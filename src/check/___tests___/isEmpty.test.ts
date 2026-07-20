import {describe, expect, it,test} from 'vitest';

import {isEmpty} from '../isEmpty'; 

describe("isEmpty without test.each()",()=>{
    it("for string raul sholud be true",()=>{
        const result = isEmpty("raul");
        expect(result).toBe(true);
    })
    it("for an empty array should be true",()=>{
        expect(isEmpty([])).toBe(true);
    })
    it("for a empty object sholud be true",()=>{
        expect(isEmpty({})).toBe(true);
    })
    it("",()=>{

    })
})


describe("isEmpty with test.each()",()=>{
    // test.each([
    //     [{},true],
    //     [[],true],
    //     [null,true],
    //     ['raul',false],
    //     [undefined,true],
    //     [0,false],
    //     [1,false],
    // ])("isEmpty(%s) sholud be %s",(valor,expected)=>{
    //     expect(isEmpty(valor)).toBe(expected);
    // })
    test.each([
        {expected:true,label:"null",tested:null},
        {expected:true,label:"undefined",tested:undefined},
        {expected:true,label:"empty array",tested:[]},
        {expected:true,label:"empty object",tested:{}},
        {expected:true,label:"new Date()",tested:new Date()},
        {expected:true,label:"/d+/",tested:/d+/},
        {expected:false,label:"[1,2]",tested:[1,2]},
    ])(`isEmpty($label) should be $expected`,({tested,expected})=>{
        expect(isEmpty(tested)).toBe(expected);
    })
})