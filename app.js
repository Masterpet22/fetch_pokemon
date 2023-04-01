const cuerpo = document.getElementById('cuerpo')
let pokemon = 1


const btn = document.getElementById('btn')
.addEventListener('click', elegirPokemon)

function elegirPokemon(){
    pokemon = parseInt(Math.random() * 800)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            cuerpo.innerHTML = `
                <h2 class="nombre">${data.name}</h2>
                <img src="${data.sprites.front_default}" class="imagen">
            `
    });

}