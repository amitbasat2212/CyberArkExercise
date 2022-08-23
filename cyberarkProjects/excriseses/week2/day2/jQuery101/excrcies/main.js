//Exercise 1

let button = '<button class="buttonHumen">Add Humen</button>'
let input = '<input type="text" id="my-input" placeholder="Some Text!"> '

$('body').append(input);
$('body').append(button);


$('.buttonHumen').click(function(){
    let text = $('#my-input').val()
    $("#ul").append($(`<li>${text}</li>`))
    $('#my-input').val("")
})

//excrcise 2
$('#ul').on('click','li',function(){
    $(this).remove();
})

//excrcise 3

let Box = '<div class="box"></div>'

$('body').append(Box);
$('body').append(Box);

$('.box').hover(function () {    
   $(this).css("background-color", "orange")     
},function(){
    $(this).css("background-color", "#8e44ad")     
})


//Exercise 4

$('.item').click(function(){
    let Stock = $(this).data();
    if(!Stock.instock){
       $(this).unbind("click"); 
    }else{
        let textButton = $(this).text();
        $('#cart').append(`<div class=fruit>${textButton} ${"x"}${Math.floor(Math.random() * 10)}</div>`)
    }   
    
})

$('#cart').on('click','.fruit',function () {
    console.log($(this))
    $(this).remove();
})




//Exercise 5

const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

  for(let i=0;i<fruits.length;i++){
    let fruitColor = fruits[i].color;
    let fruitName = fruits[i].name;
    let NewFruit = `<div class=${fruitColor}>${fruitName}</div>`
    $('#basket').append(NewFruit);
  }


 





  































