posts =[

    {name:"amit",text:"rocket is the best dogi "},
    {name:"itay",text:"rocket is going to swim "},
    {name:"rotmona",text:"rocket is going to coca cola "},
    {name:"liem",text:"rocket is preety "},
    {name:"gogo",text:"rocket is gourges "}

]

function render (){
    $('.all').empty()
    for(let i=0;i<posts.length;i++){
        let NewDiv = `<div class="all"><div class=posts>${posts[i].name}:</div><div class=text >${posts[i].text}</div></div>`
        $('body').append(NewDiv);
    }
}


$('button').click(function(){
    let name = $('#my-input1').val();
    let text = $('#my-input2').val();
    posts.push({name:name,text:text});
    render();
    $('#my-input1').val("")
    $('#my-input2').val("")
})

// $('body').on('click',".posts",function(event){
//     console.log(event.target);
//     //posts.splice()
// })

render();