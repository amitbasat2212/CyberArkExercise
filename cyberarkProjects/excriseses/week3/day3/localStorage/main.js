

// localStorage.removeItem('name')
// localStorage.clear()
localStorage.people="lonley"
localStorage.people1="lonley1"
localStorage.name="amit"
console.log(localStorage.getItem('name'))


// localStorage.personalData = JSON.stringify({
//     averageTimeOnSite: {unit: "hr", amt: 9},
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
//   })


// let userStuff = JSON.parse(localStorage.personalData)

// console.log(userStuff.probabilityOfFriends) //prints 0.02




//spot check 1 

localStorage.userStorage = JSON.stringify({
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
})

let userstorageObject = JSON.parse(localStorage.userStorage);
console.log(userstorageObject.cart[userstorageObject.cart.length-1].count);


// let data = JSON.parse(localStorage.dataThatIsImportant || "[]")

////excirces 1 

function render(localStorageWidsome){
    $('#texts').empty();
    for(let i=0;i<localStorageWidsome.length;i++){
        let text = `<button id=delete>delete wisdome</button>
        <div class=text id=${localStorageWidsome[i].id} data-id=${localStorageWidsome[i].text}> ${localStorageWidsome[i].text} </div>
        `
        $('#texts').append(text);
    }
}

$('#textView').on('click',function(){
    let textView = $('#text').val();
    let localStorageWidsome = JSON.parse(localStorage.wisdom || "[]");
    localStorageWidsome.push({text:textView,id:localStorageWidsome.length+1});
    render(localStorageWidsome);
    localStorage.wisdom=JSON.stringify(localStorageWidsome);
    
})


$('#clearWisdom').on('click',function() {
    $('#texts').empty();
    localStorage.removeItem('wisdom')
    
})



$('body').on('click','#delete',function() {   
    let textId = $(this).next('.text').attr('data-id');
    let localStorageWidsome = JSON.parse(localStorage.wisdom || "[]");
    let localstorageaNew =localStorageWidsome.filter(l=>l.text!==textId).map(m=>{return {id:localStorageWidsome.length+1,text:m.text}})
    localStorage.setItem('wisdom',JSON.stringify(localstorageaNew));
    render(localstorageaNew);
})


