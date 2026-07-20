
export const isEmpty = (valor:unknown):boolean =>{

    const safeObject = valor
    const isCountable = safeObject instanceof Object || safeObject instanceof Array;

    if(!isCountable) return true;

    return Object.entries(safeObject).length === 0;

}
