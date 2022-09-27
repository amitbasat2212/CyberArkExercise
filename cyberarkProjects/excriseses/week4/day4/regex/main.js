// const str = "the fat cat hit the rat with a bat"
// const str1 ="bob yelled hello"
// const str2 = "it's fleece was white as snow";
// const str3 = "0542212222";
// const str4 = "054hihihii";
// const str5 = "9542212222";

//Checks if it contains “a” in the string
const checkIfContainsA = function (str){
    const regex = /\a/;
    return  regex.test(str)
}

//Checks if it’s a string that ends with “at”
const checkIfEndsWithAt = function(str){
    const regex = /at$/;
    return  regex.test(str)
}
//Checks if it’s a number that starts with 054 and of size 10.
const checkIfStartsWithNum = function(str){
  /**
   * should return true if string is all numbers / size 10 / starts with 054
   * HINT : look into ^ , into Ranges [] and sizes {}
   */      
    const regex = /^054[0-9]{7}$/
   
    if(regex.test(str))
    {
        return true
    }
    return false;
    
}

//  console.log(checkIfContainsA(str)) //returns true
//  console.log(checkIfContainsA(str1)) //returns false
//  console.log(checkIfEndsWithAt(str)) //returns true
//  console.log(checkIfEndsWithAt(str1)) //returns false
//  console.log(checkIfEndsWithAt(str2)) //returns false

//  console.log(checkIfStartsWithNum(str)) //returns false
//  console.log(checkIfStartsWithNum(str3)) //return true
//  console.log(checkIfStartsWithNum(str4)) //return false
//  console.log(checkIfStartsWithNum(str5)) //return false




//excrice2

const SearchMatchingRegex=(string)=>{
    const isMatch=regexArr.some(rx => rx.test(string));
    return isMatch;
}




const regexArr = [/a/, /b/, /^d/, /e$/]
const str = "Bike"
const str1 = "the room is on fire"
const str2 = "Fergalicious"
const str3 = "Fox in sheep clothing"

console.log(SearchMatchingRegex(str)) //return true (contains b)
console.log(SearchMatchingRegex(str1)) //return true (ends with e)
console.log(SearchMatchingRegex(str2)) //return true (contains a)
console.log(SearchMatchingRegex(str3)) //return false



//excrice3
const emailValidator=(email)=>{
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.com');
    return regex.test(email);
    
}



const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"



console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true
console.log(emailValidator(email3)) //return false



//excrice4
const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\.com)?$'); // validate fragment locator
	  return !!urlPattern.test(str);
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return true
console.log(urlValidator(thirdURL)) //return false


