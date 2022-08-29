// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })


// //spot check 1
// //we can use `title` instead of `isbn` - that's allowed according to this application's programming interface!
// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function(result){
//   console.log(result.items[0].volumeInfo.description ) //prints A lot of description Text
// })


// //spot check 2 
// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user

//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
//   let catchPrhase = users[users.length-1].company.catchPhrase
//   console.log(catchPrhase)
  
//   //log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })

// function useData (data){
//     console.log(data);
// }

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
//   })


//     //excrcie1
//     function fetch1(data){
//         $.ajax({
//             method:"GET",
//             url:'https://www.googleapis.com/books/v1/volumes?q=isbn:'+data,
//             success:function(result){
//                 console.log(result)
//             },
//             error:function(xhr,text,error){
//                 alert("somthing is wrong")
//             }
//           })
//       }
    
//       fetch1(9782806269171)
      

//     //excrcie 2
//   function fetch2(queryType,queryValue){
//     $.ajax({
//         method:"GET",
//         url:'https://www.googleapis.com/books/v1/volumes?q='+queryType+':'+queryValue,
//         success:function(result){
//             console.log(result)
//         },
//         error:function(xhr,text,error){
//             alert("somthing is wrong")
//         }
//       })
//   }

//   //fetch(9782806269171)
//   fetch2("title", "The Wise Man's Fears")
//   fetch2("isbn", 9789814561778)


  //excrcie 3 
//   function fetch3(queryType,queryValue){
//     $.ajax({
//         method:"GET",
//         url:'https://www.googleapis.com/books/v1/volumes?q='+queryType+':'+queryValue,
//         success:function(result){
            
//             for(let i=0;i<result.items.length;i++){
//                 console.log(result.items[i].volumeInfo.title)     
//                 console.log(result.items[i].volumeInfo.authors) 
//             }                 
            
//         },
//         error:function(xhr,text,error){
//             alert("somthing is wrong")
//         }
//       })
//   }

//   //fetch3("title", "The Wise Man's Fears")
//   fetch3("isbn", 9789814561778)

url = ""
  //excrice4
//   $.ajax({
//     method:"GET",
//     url:url,
//     success:function(result){
//       console.log(result)
//       let image = `<iframe src=${result.data[3].embed_url} title="W3Schools Free Online Web Tutorials"></iframe>`
//       $('body').append(image)           
                   
        
//     },
//     error:function(xhr,text,error){
//         alert("somthing is wrong")
//     }
//   })

  //excrice5
 function GifGenertor(params){
  $.ajax({
    method:"GET",
    url:`http://api.giphy.com/v1/gifs/search?q=${params}&api_key=fYDrHFx7k38GN1jMoyLf0zobJmlFWkCM&limit=5`,
    success:function(result){
      console.log(result)
      let image = `<iframe src=${result.data[3].embed_url} title="W3Schools Free Online Web Tutorials"></iframe>`
      $('body').append(image)           
                   
        
    },
    error:function(xhr,text,error){
        alert("somthing is wrong")
    }
  })
}

$('#gifgenertor').on('click',function(){
    let gifText = $('#gif').val();
    GifGenertor(gifText);
})