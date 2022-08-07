
// export para ser módulo

// forma de construir clases de forma explicita
export class Pokemon {

    /**public id: number;
    public name: string;

    constructor( id:number, name:string ){
        this.id = id;
        this.name = name
        console.log('Se ejecutó un contrucor');
        
    }**/

    // Forma corta de delcaración de consturctor 
    // ReadOnly evitar cambiar el valor de id 
    constructor(public readonly id:number, public name:string){}

}
export const charmander = new Pokemon(4,'Sharmander');


//charmander.id = 10
//charmander.name = 'Mew'