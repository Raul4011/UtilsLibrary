import {type AnyFunction } from "../types/helpers";

export function debounce<T extends AnyFunction>(fn:T,delay:number):(...args:Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined//c@types/node
    return function debounceFunction(...args:Parameters<T>):void{
        if (timeoutId !== undefined) { 
            clearTimeout(timeoutId)}
        timeoutId=setTimeout(()=>fn(...args),delay)
    }
    
}

// function greet (name:string,age:number):void {
//     console.log(`Hello ${name} age: ${age} years`)
// }

// type greetTypes = Parameters<typeof greet>





