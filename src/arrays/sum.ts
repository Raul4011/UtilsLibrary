import {arraylable} from "./arraylable"

export const Sum = (value:number[]):number =>{
    return (arraylable(value) as number[]).reduce((acc,cur)=>acc+cur,0)
}