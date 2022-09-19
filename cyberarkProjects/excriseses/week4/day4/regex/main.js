const str = "the fat cat hit the rat with a bat"
const str1 ="bob yelled hello"
const str2 = "it's fleece was white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "9542212222";

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
    print(isMatch)
}


regexArr = [/at/,/a/,/a$/,/^b/]

SearchMatchingRegex("cat") //will return true
SearchMatchingRegex("bike") //will return true
SearchMatchingRegex("mouse") //will return false