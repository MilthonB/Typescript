export const pokemonIds = [1,20,30,40,50]



// Aunque marca error
// Typescripe intentara transpilart todo el código a javascript 
// por lo tanto éste código es totalmente valido

//pokemonIds.push("asdasdasd")
//pokemonIds.push("1")
pokemonIds.push(+"1") // este pasara a ser de tipo number conversion rápida


console.log(pokemonIds);

// Como obligar a un objecto a tener siempre los mismos tipos de
// datos? 
// Ejmplo el id siempre tiene que ser un numero 
// dentro del objeto
// Ese problema se resuelve con una interface
// y el objeto termina de siendo de tipo pokemon que es una 
// interface y se asignan sus propiedades 
export const pokemon: pokemon = {
    id: 15,
    nombre: 'Sharmander'
}


interface pokemon {
    id: number
    nombre: string
    edad?: number // Puede venir o no este valor en el objecto 
}

export const charmander: pokemon =  {
    id: 0,
    nombre: ""
}




