
type isNullorUndefined  = null | undefined;

export const isNullorUndefined = (value:unknown):value is isNullorUndefined =>{
    return value === null || value === undefined;
}