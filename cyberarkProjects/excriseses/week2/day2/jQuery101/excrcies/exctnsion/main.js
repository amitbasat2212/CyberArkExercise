
let lengthButtons = $('span').length;
console.log(lengthButtons)


for(let i=0;i<lengthButtons;i++){
    $('span').addClass("picker");
    var arr = [];   
    $("span").each(function(){
        arr[i]=$(this);
        $(this).css("background-color",$(this).text());
    }); 

    $('span').click(function () {
        let colores = $(this).data()
        console.log(colores[i])
        $('.box').css("background-color",colores.color)
    })
      
}


