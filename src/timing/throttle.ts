import type { AnyFunction, ThrottledFunction } from "../types/helpers";


export function throttle<T extends AnyFunction>(fn:T,delay:number):ThrottledFunction<T> {

    let timeoutId:ReturnType<typeof setTimeout> | undefined

    return (...args: Parameters<T>) => {

        if(timeoutId !== undefined){
            return
        }

        timeoutId = setTimeout(() => {
            timeoutId = undefined
        }, delay)

        fn(...args)
    }
}