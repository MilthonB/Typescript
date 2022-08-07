
// export para ser módulo

import axios from "axios";

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
    // ReadOnly elo puedes leer pero no modificar

    // El this apunta a la instancia cuando estamos dentro de una clase
    // y pertenece a la case 
    get imgaURL(): string{
        return ` https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id:number, 
        public name:string,
        //public imgaURL: string    
    ){}


    // Métodos
    
    // cuando el modificador de acceso es static entonces this significa otra cosa
    // niveles de acceso public and private
    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
        
    }

    speak(){
         console.log(`${this.name}, ${this.name}`);
         
    }

    // Métodos async await 
    async getMoves(){

        const resp = await axios('https://pokeapi.co/api/v2/pokemon/4')
        
        console.log(resp.data);
        

        return resp.data

    }


} 

export const charmander = new Pokemon(4,'Sharmander');


// y pudes acceder a esa propiedad desde la instancia
charmander.getMoves();

// charmander.scream()
// charmander.speak()
//charmander.id = 10
//charmander.name = 'Mew'