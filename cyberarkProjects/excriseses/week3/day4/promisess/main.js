
// //spot check 1 
// let p = $.get('/randomWord')

// p.then(function (word) {
//     console.log(word)
    
// })

// //spot check 2
// let play = $.get('/sentiment/Ploy')
// play.then((result)=>{
//     console.log(result)
// })



// //Spot Check 2
// $.get('/sentiment/Ploy')
//     .then(function (response) {
//         console.log(response)
//     })


// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`)
//     })
//     .catch(function (error) { console.log(error) })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })
//     .catch(function (error) { console.log(error) }) 




// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//     )
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     }) 



///excrice1 

$.get('https://random-word-api.herokuapp.com/word')
    .then(function(word){
        console.log(word)
        $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
            .then(function(result){
              console.log(result)      
            })
            .catch(function (error) { console.log(error) }) 
    }).catch(function (error) { console.log(error) }) 



//excrice 2 
$.get('https://random-word-api.herokuapp.com/word')
    .then(function(word){
        
        let title=$.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        let gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=fYDrHFx7k38GN1jMoyLf0zobJmlFWkCM&limit=5`)    
        Promise.all([title,gif]).then(function(results){
            showOnScreen(results[0],results[1]);
        }).catch(function (error) { console.log(error) }) 
    
    })

function showOnScreen(book,gif){
    console.log(book)
    console.log(gif)
   if(book && gif) {
    let showOnScreen=`<iframe src=${gif.data[0].embed_url} title="W3Schools Free Online Web Tutorials"></iframe>`
    let titleAuturos =book.items[0].volumeInfo.authors;
    let titleBook =book.items[0].volumeInfo.title;

    $('body').append(showOnScreen)
    $('body').append(titleAuturos)
    $('body').append(titleBook)
   }
}