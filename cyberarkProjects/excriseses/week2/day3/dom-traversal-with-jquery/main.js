// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//   })


// $('button').on('click', function() {
//     let relevantInputValue = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
//   })


//spot check 1

// $('button').click(function(){
//     let textOfSpan = $(this).closest("div").find("span").text();
//     console.log(textOfSpan);
// })

//spot check 2
$('button').click(function () {
    console.log($(this).closest("div").find("div"))
    let continaerText = $('.container').find("p").text();
    console.log(continaerText)
})





 