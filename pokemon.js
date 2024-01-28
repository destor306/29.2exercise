
let baseURL = 'https://pokeapi.co/api/v2/pokemon'
//1
let pokemons = []
$.getJSON(`${baseURL}/?limit=1000`,function(data){
    pokemons=data.results
    console.log(pokemons);

    
    
})
//2

$.getJSON(`${baseURL}/?limit=1000`,function(data){
    
    let rndompokemons = getRandomElements(pokemons, 3);
    rndompokemons.forEach(pokemon =>{
        console.log(pokemon);
    })
})

function getRandomElements(arr, count){
    let randomElements = [];
    let indices = new Set();

    while(indices.size < count) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (!indices.has(randomIndex)) {
            indices.add(randomIndex);
            randomElements.push(arr[randomIndex]);
        }
    }

    return randomElements;
}

//3

// $.getJSON(`${baseURL}/?limit=1000`,function(data){
    
//     let rndompokemons = getRandomElements(pokemons, 3);
//     rndompokemons.forEach(pokemon =>{
//         $.getJSON(`${baseURL}/${pokemon.name}`, function(data){
//             $.getJSON(`${data.species.url}`, function(data){
//                 data.flavor_text_entries.forEach(flavor_text=>{
//                     if (flavor_text.language.name =='en'){
//                         console.log(flavor_text.flavor_text)
//                     }
//                 })
//             })
//         })
//     })
// })


//4
let $btn = $('button');
let $card = $('#card');

function makePokemonCard(name, imgSrc, description){
    return `
    <div>
    <h1>${name}</h1>
    <img src=${imgSrc}>
    <p>${description}</p>
    </div>
    `
}

$.getJSON(`${baseURL}/?limit=1000`,function(data){
    
    let rndompokemons = getRandomElements(pokemons, 3);
    rndompokemons.forEach(pokemon =>{
        let name = pokemon.name;
        $.getJSON(`${baseURL}/${pokemon.name}`, function(data){
            let imgSrc = data.sprites.front_default;
            $.getJSON(`${data.species.url}`, function(data){
                console.log(data);
                let descriptions = []
                data.flavor_text_entries.forEach(flavor_text=>{
                    if (flavor_text.language.name =='en'){
                        descriptions.push(flavor_text.flavor_text);
                    }
                })
                $card.append(makePokemonCard(name, imgSrc,descriptions[0]))



                // if (data.flavor_text_entries.flavor_text.language.name =='en'){
                //     let description = data.flavor_text_entries[0]
                //     $card.append(makePokemonCard(name, imgSrc,description))
                // }
                // data.flavor_text_entries.forEach(flavor_text=>{
                //     if (flavor_text.language.name =='en'){
                //         let description = 
                //         $card.append(makePokemonCard(name, imgSrc,))
                //     }
                // })
            })
        })
    })
})