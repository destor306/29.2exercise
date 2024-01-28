let number = 9;
let URL = "http://numbersapi.com";

// part 1 Number Facts
// 1
$.getJSON(`${URL}/${number}?json`, function(data){
    console.log(data);
});

// 2
let numbers =[1,3,4,11]
$.getJSON(`${URL}/${numbers}?json`, function(data){
    console.log(data);
});

let facts =[]
$.getJSON(`${URL}/1?json`, function(data){
    facts.push(data.text);
    $.getJSON(`${URL}/2?json`, function(data){
        facts.push(data.text);
        $.getJSON(`${URL}/3?json`, function(data){
            facts.push(data.text);
            $.getJSON(`${URL}/4?json`, function(data){
                facts.push(data.text);
                    
                facts.forEach(fact =>{
                    $("body").append(`<p>${fact}</p>`);
                })                
            })
        })
    })
});

