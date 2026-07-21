import type { AnyFunction } from "../types/helpers";


export function throttle<T extends AnyFunction> (fn:T,delay:number): (...args: Parameters<T>) => void {
   
   let timeoutId:ReturnType<typeof setTimeout> | undefined
    return function throttledFn (...args:Parameters<T>) {
        if(timeoutId !== undefined){
            return
        }
        timeoutId = setTimeout(()=>{
            timeoutId = undefined
        },delay)
        return fn(...args)
    }
}