async function getPokemon() {
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
    let pokemons = await respuesta.json()
    console.log(pokemons)
}

getPokemon()