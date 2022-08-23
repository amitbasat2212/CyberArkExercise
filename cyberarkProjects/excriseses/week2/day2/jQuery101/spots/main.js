const header = $('#test');
console.log(header)

const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1] //will return everything after the # in selector 
    return document.getElementById(elementId)
        }
    }

    console.log(myQuery("#test"))


    //spot check 1
    $("h4").css("color", "red")



    $("h1").css("color","blue")
    
    //spot check 2
    $(".red-div").css("color","red")
    
    $(".red-div").css("color","red")

    $("li:first-child").css("background-color", "green")
    $("li:last-child").css("background-color", "pink")

    $("#brown-div").css("color","brown")

    //spot check 3
    $('#b1').addClass('box')
    $('#b2').addClass('box')


    //spot check 4
    $('#my-input').val('Terabyte')


    //spot check 5
    const data=$('#barcodeexprition').data()
    console.log("The item with " + " "+data.barcode +" " +"will expire "+ data.exp)

    

    //spot check 6
    $('#hover1').hover(()=>{
        $('#hover1').css("background-color", "blue")
    })


    // //spot check 7-to make it work put spot 12 in a comment

    // $('button').click(()=>{
    //     alert($('#my-input').val())
    // })

    //Spot Check 8

    $('.box1').hover(function() {
        $(this).css("background-color","blue")
    })



    //helpful
    // $('button').click(function () {
    //     alert('clicked!')
    //   })

    // $('button').on('click', function () {
    //     alert('clicked!')
    //   })

    // $("#b1").hover(function () {
    //     console.log($(this))
    // })

    // const aDynamicDiv = "<div class='mine'>Oh yes</div>"
    // const elem = $(aDynamicDiv)
    // console.log(elem)
    // $("body").append(elem)
    
    
    // const text = "Banana"
    // const item = $(`<div class=fruit>${text}</div>`)
    
    // console.log(item) //the same

    // const addDiv = function() {
    //     $("body").append("<div class=box></div>");
    //   };
      
    //   $("button").on("click", function() {
    //     addDiv();
    //   });
      
    //   $("body").on("click", ".box", function() {
    //     alert("hi");
    //   });



    $('.fruits').append('<p class="red">Raspberry</p>')
    $('.fruits').append('<p class="brown">Kiwi</p>')



    //Spot Check 9

    $('.feedme').click(function(){
        let text = $(this).text()
        let divCopy =$(`<div class=feedme>${text}</div>`)
        $("body").append(divCopy)
    })


    // //Spot Check 10

    // const names = [
    //     { first: "Alex", last: "Johnson" },
    //     { first: "Byron", last: "Loveall" },
    //     { first: "Cassandra", last: "Wuthers" },
    //     { first: "Deandre", last: "Rahm" },
    //     { first: "Ellena", last: "Freeman" }
    //   ]

    // for(let i=0; i<names.length;i++){
    //     $('body').append($(`<div class="d">${names[i].first} - ${names[i].last}</div>`))
    // }  

    //Spot Check 11
    $('.give').hover(function(){
        $(this).remove();
    })

    //Spot Check 12-to comment 13 
    // $('button').click(function(){
        
    //     let newDiv ='<div class="blog">amit blog</div>'
     
    //     $('#blogs').append(newDiv);

    // })

    // $('#blogs').click(function(){    
    //     $('.blog').text("hello world");

    // })


    //spot check 13 

    $('button').click(function(){
        
        let newDiv ='<div class="blog">amit blog</div>'
     
        $('#blogs').append(newDiv);

    })

    $('#blogs').on('click','.blog',function(){  
        $('.blog').text("hello world");

    })


    
    














    











