import {typeOf} from '../misc/typeOf';

export const isObject = (value:unknown):boolean =>{
    return typeOf(value) === "object";
}