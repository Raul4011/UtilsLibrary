
//recibe un valor y si es un array lo devuelve, si no devuelve un array vacio
// export const arraylable = <T>(value:T[]|null):T[]|[] =>{
//     return Array.isArray(value) ? value : [];
// }

export const arraylable = <T>(value: unknown): T[] => {
  return Array.isArray(value) ? (value as T[]) : [];
};

