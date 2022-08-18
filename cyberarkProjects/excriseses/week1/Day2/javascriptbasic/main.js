
//excrsices1
console.log("Hello, world!")

const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString

console.log(52 !== "52")

let username = prompt("What is your username?")



//excrsices2
let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
const d = new Date();
let year = d.getFullYear();

function boughtTesla2(){
    if(year-currentYear>=4){
        console.log(" the customer would like an upgrade?")
    }else{
        console.log(" the customer is satisfied with the car?")   
    }
}

if(boughtTesla && isUSCitizen){
    boughtTesla2();
    
}else if(!isUSCitizen && boughtTesla){
    console.log("the customer would like to move to the US")   
}
else if(!boughtTesla){
    console.log("interested in buying one?")   
}


//excrsices3

const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2);
console.log(numbers);
numbers[3]=1;
numbers.splice(-4)
console.log(numbers);
numbers.unshift(0)
console.log(numbers);

//excrsices4
let people= {
    name:"roti",
    age:1,
    city:"brnabona"

    
}

//Constructor
function People (name, age,city) {
    this.name = name;
    this.age = age;
    this.city = city;
}


const p1 =new People("momo",2,"broklin1");

const p2 =new People("gogo",32,"broklin");



if(p1.age===p2.age && p1.city===p2.city ){
    console.log("Jill wanted to date Robert");
}
else if(!(p1.city===p2.city)){
    console.log("Jill wanted to date Robert, but couldn’t");
}


//excrises5

let book={
    title:"to be or not to be ",
    author:"amit bb"
}

let book1={
    title:"to be or not to be ",
    author:"amit bb"
}

// function Book (title,author) {
//     this.title = title;
//     this.author = author;
    
// }

let library = {
    books:[book1,book]

    
}

const l = library.books;

console.log(l)


//excrises6

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people1 = []

for(i=0; i<names.length;i++){
    people1.push({name:names[i],age:ages[i]})
    console.log(people1[i].name +  " " +people1[i].age)
}

console.log(people1)




//excrsies7
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  for(i=0; i<posts.length;i++){
    if(posts[i].id===2){
        posts.splice(i,1)
    }
   }

console.log(posts)



//excrsies7

const poosts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agr  ee!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]


  for (let index = 0; index < poosts.length; index++) {
    if(poosts[index].id===2){
        for(let i=0;i<poosts[index].comments.length;i++){
            if(poosts[index].comments[i].id===3){
              poosts[index].comments.splice(i,1)
            }
        }
    }
    
  }

  console.log(poosts)


  //extinsion

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  keys = Object.keys(dictionary)
  let index=0;
 
  for (let index = 0; index < keys.length; index++) {
        console.log("Words that begin" +keys[index])
        for(let i=0;i<dictionary[keys[index]].length;i++){
            console.log(dictionary[keys[index]][i])
            
        }
    
    
  }

  
console.log( [ {human: {name: 'Daena', age: 31} } ][0].age)


//excrises after jill - extinasions 

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  keys = Object.keys(reservations)
  let name = prompt('Please enter the name for your reservation');
  let name2= name.toLowerCase();
  let nameted= keys[1].toLowerCase()
  
  if("Bob".toLowerCase()===name.toLowerCase() ){
    if(reservations[keys[0]].claimed==false){
      alert("welcome " + name)
    }else{
      alert("it alredy been taken")
    }
  }else if(nameted===name2 ){
    
    if(reservations[keys[1]].claimed==false){
      alert("welcome " + name)
    }else{
      alert("it alredy been taken")
    }
  }
  else{
    reservations[name]={clamied:true}
  }

  console.log(reservations)