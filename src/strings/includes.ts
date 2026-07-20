
export const includes =(str:unknown,value:string):boolean =>{
    return (typeof str === "string") ? str.includes(value) : false
}