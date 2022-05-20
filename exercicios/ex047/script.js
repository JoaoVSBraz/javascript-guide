let pokeName;
function getPokeName(event) {
    pokeName = event.srcElement.value
};

function getPokemon() {
    let poke = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
        type: 'GET',
        dataType: 'json',
    }).done(function (data) {
        PokemonComponent(data)
    }).fail(function () {
        alert('Algo de errado não está certo')
    })

    return `<img src=${poke.url} />`
};

function PokemonComponent(data) {
    const resultado = document.querySelector('#resultado')
    const pokeName = PokeName(data)
    const pokeImage = PokeImage(data)
    
    try {

        if(pokeName == null || undefined & pokeImage == null || undefined){
            throw 'Algo de errado não está certo'
        }

        resultado.innerHTML = `${pokeName} <br /> ${pokeImage}`
    } catch (error) {
        alert(error)
    }

    function PokeImage(data) {
        return `<img src=${data.sprites.other["official-artwork"].front_default} style="width: 150px; margin-top: 24px"/>`
    };
    
    function PokeName(data) {
        return `<h2>Você escolheu o ${data.name}!`
    }
}


