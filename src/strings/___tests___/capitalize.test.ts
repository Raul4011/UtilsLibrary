import { describe, expect, it } from 'vitest';

import { capitalize } from '../capitalize';

describe("capitalize", () => {
    it("capitalize('coca cola') shoul be return 'Coca cola' ",()=>{
        expect(capitalize('coca cola')).toBe('Coca Cola');
    })
    it("capitalize('') shoul be return '' ",()=>{
        expect(capitalize('')).toBe('');
    })
    it("capitalize('RAUL') should return 'Raul' ",()=>{
        expect(capitalize("RAUL")).toBe("Raul")
    })
    it("capitalize('hola mundo desde typescript') should return 'Hola Mundo Desde Typescript'",()=>{
    expect(capitalize("hola mundo desde typescript"))
        .toBe("Hola Mundo Desde Typescript")
})
    
})