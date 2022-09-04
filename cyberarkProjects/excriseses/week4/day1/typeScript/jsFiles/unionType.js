"use strict";
function doX(val) {
    return val == 8;
}
let val2 = true;
doX(val2);
// function concat(UnionStringtemp:UnionString,UnionBoolNumtemp:UnionBoolNum):void{
//     let typeofBool = typeof UnionBoolNumtemp;
//     if(typeofBool==='boolean'){}
//     let concate:String="";
//     if(Array.isArray(UnionStringtemp)){
//         for(let i=0;i<UnionStringtemp.length;i++){
//             concate+=`${UnionStringtemp[i]}`;
//         }
//     console.log(concate)
//     }else if((typeof UnionBoolNumtemp === 'number' && UnionBoolNumtemp === 1)){
// let concate:String="";
//             if(Array.isArray(UnionStringtemp)){
//                 for(let i=0;i<UnionStringtemp.length;i++){
//                     concate+=`${UnionStringtemp[i]}`;
//                 }
//             console.log(concate)
//     }
//     }else if(typeof UnionStringtemp=='string'){
//             console.log(UnionStringtemp)
//         }else{
//             console.log("opps its not string")
//         }
// }
// concat("amit",false)
// concat(["lolo","lolo","momo"],true)
// concat("dodo",1)
// concat("amit",0)
// concat("amit",2)
// concat(["lolo","lolo","momo"],1)
function concat(strArray, isPrint) {
    if (Array.isArray(strArray)) {
        strArray = strArray.join(' ');
    }
    else if (typeof strArray !== 'string') {
        console.log(`Function doesn't support type ${typeof strArray}`);
    }
    if ((typeof isPrint === 'boolean' && isPrint) || (typeof isPrint === 'number' && isPrint === 1)) {
        console.log(strArray);
    }
    else if ((typeof isPrint !== 'boolean' && !isPrint)) {
        console.log(`Function doesn't support 'isPrinted' with value '${isPrint}'`);
    }
}
concat("amit", false);
concat(["lolo", "lolo", "momo"], true);
concat("dodo", 1);
concat("amit", 0);
concat("amit", 2);
concat(["lolo", "lolo", "momo"], 1);
function print_numbers(phoneNumbersTemp) {
    if (typeof phoneNumbersTemp === "string") {
        console.log(`my type is string value is: ${phoneNumbersTemp}`);
    }
    else if (typeof phoneNumbersTemp === "number") {
        console.log(`my type is number value is: ${phoneNumbersTemp}`);
    }
    else if (Array.isArray(phoneNumbersTemp)) {
        if (typeof phoneNumbersTemp[0] === "number") {
            console.log(`my type is number[] value is: ${phoneNumbersTemp}`);
        }
        else if (typeof phoneNumbersTemp[0] === "string") {
            console.log(`my type is string[] value is: ${phoneNumbersTemp}`);
        }
    }
}
print_numbers(["1", "2", "3", "4", "5", "6"]);
print_numbers([1, 2, 3, 4, 5, 6]);
print_numbers(5);
print_numbers("4");
//# sourceMappingURL=unionType.js.map