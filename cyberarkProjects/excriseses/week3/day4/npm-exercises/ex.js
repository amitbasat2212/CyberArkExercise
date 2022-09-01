//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
var validator = require('validator');
console.log(validator.isEmail("shoobert@dylan")); //=> true
//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone("786-329-9958",['en-US']));
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"

//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text,blacklist))






/////////exc2
const { faker } = require('@faker-js/faker');

const makeHuman=(number)=>{
    let humens=[];
    for(let i=0;i<number;i++){
        
        humens.push({           
            Name:faker.name.firstName(),
            avatar: faker.image.avatar(),
            Company:faker.company.companyName()           
          });
    }  
    return humens;  
       
}

console.log(makeHuman(2))


