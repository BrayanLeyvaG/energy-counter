import { retornaArreglo } from "../../base/07-deses-arr"


describe('Pruebas en desestructuracion', () => {
    test('retornaArreglo debe retornar un string y un numero', () => {
        const [ letras, numeros ] = retornaArreglo()
       /*  const arrTest = ['ABC', 123]
        expect(arr).toEqual(arrTest) */
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })
    
})
