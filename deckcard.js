
let cards = []
let baseURL ='https://deckofcardsapi.com/api/deck'
// $.getJSON(`${baseURL}/new/shuffle/?deck_count=1`, function(data){
//     //console.log(data);
//     deck_id = data.deck_id;
//     $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`,function(data){
//         cards.push(data);
//         $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`,function(data){
//         cards.push(data);
//         cards.forEach(card=>{
//             console.log(card.cards[0].value, card.cards[0].suit);
//         })
//     })
//     })

// })

let $btn = $('button');
let deck_id= null;
let $card = $('#card');
$.getJSON(`${baseURL}/new/shuffle/?deck_count=1`, function(data){
    deck_id = data.deck_id;
});

$btn.on('click', function(){
    $.getJSON(`${baseURL}/${deck_id}/draw`, function(data){
        $card.append(`<img src="${data.cards[0].image}">`)
        console.log(data);
        if (data.remaining == 0){
            $btn.remove();
        }
    })
    
})
