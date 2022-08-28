const source = $('#store-template').html();
const template = Handlebars.compile(source)

const newHTML = template({item: "bread", price: "15"});
$('.items').append(newHTML);


//spot check 1+2
var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer",socialNetwork:false},
        {name: "The weird dude", description: "Quick with a smile",socialNetwork:true},
        {name: "Taylor", description: "Just Taylor",socialNetwork:true}
    ]
}
const newHTML1 = template(classData);
$('.students').append(newHTML1);



//spot check 

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderOne=()=>{
    const source = $('#animel-template').html();
    const templateAnimels = Handlebars.compile(source)
    const newHTML1 = templateAnimels({animels:animals});
    $('.animels').append(newHTML1);
}

const renderTwo=()=>{
    const source = $('#languge-template').html();
    const templatelanguge = Handlebars.compile(source)
   
    const newHTML1 = templatelanguge({languages:languages});
    $('.languge').append(newHTML1);
}

renderOne();
renderTwo();





