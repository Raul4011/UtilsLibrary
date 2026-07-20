//Record<string,unknown>

import {typeOf} from '../misc/typeOf';

type genericObject = Record<string,unknown>

export const isObjectLike = (value: unknown): value is genericObject => {
    return (
        !(value instanceof Date)
         && !(value instanceof RegExp) 
         && !Array.isArray(value)
         && typeOf(value) === "object"
    )
};

