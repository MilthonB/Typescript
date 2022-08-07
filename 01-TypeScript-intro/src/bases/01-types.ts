
// Es un módulo cuando se exportan datos 


// Leer y comprender todos los errores que puedan ocurrir 

// Typescript infiere todos los tipos de vairables y constantes que se usan

// Dos opciones de declaraciones y sus tipos de datos
// Uno lo infiere y el otro los define 
export const name = "Saul"
export const name1: string = "Estafani"
export const esvalido: boolean = true

// Para poder exportar tu data de una lugar a otro del proyecto
// Se requiere agregar la palabra clave export
// ejemplo

export const edad: number = 165

export const valorX: string | undefined = 'Walter'
export const valory: string | number = 'Walter'



// No colocar codigo que se ejecute cuando sea leeido 



// Type safety
//  Analizara los datos que se asignen a la variabl y determinara si es el tipo dato
// o no y si es variable o constante y si no coinciden entonces marcara error 
// 

// El ; es arbitario


// String Multilineas 
export const templateString = `
    Hola mundo
    "Comillas "
    'simples'
    iyectar valores ${name}
    expresiones ${ 1+1 }
    numeros ${edad}
    boolean ${esvalido}

`

console.log(templateString)



