document.addEventListener('DOMContentLoaded', function(e){
    handleOnSearchSubmit()
})


function handleOnSearchSubmit(){
    const submitBtn = document.getElementById('search-button');
   
    submitBtn.addEventListener("click", function(){
        const pokemonInputVal = document.getElementById('search-input').value;
        const toLowerPokemon = pokemonInputVal.toLowerCase();
        console.log(toLowerPokemon);

        fetch(`https://pokeapi.co/api/v2/pokemon/${toLowerPokemon}/`)
            .then(resp => resp.json())
            .then(pokemon => console.log(pokemon)) 
        


    })
}


