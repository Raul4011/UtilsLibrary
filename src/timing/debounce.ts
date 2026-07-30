import type { AnyFunction, DebouncedFunction } from "../types/helpers";

export function debounce<T extends AnyFunction>(fn: T,delay: number): DebouncedFunction<T> {

    let timeoutId: ReturnType<typeof setTimeout> | undefined

    return (...args: Parameters<T>) => {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}



