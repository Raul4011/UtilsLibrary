import type { AnyFunction } from "../types/helpers";



export const isFunction = (value:unknown):value is AnyFunction =>{
    return typeof value === "function";
}