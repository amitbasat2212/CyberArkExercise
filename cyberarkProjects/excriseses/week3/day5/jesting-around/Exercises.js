class Exercises{
    //excrice1
    //should return true if n is even, false otherwise
    isEven(n) {
        if(n==null || n==undefined){
            return {error:"wrong it is not number"}
        }
        return n % 2 == 0 ? true : false
    }
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    } 
    
    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        if(str==undefined || str==null){
            return {error:"null and undifend not right "}
        }
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    validate(array){
        let arrayTrue = array.filter(t=>t==true);
        let arrayFalse = array.filter(t=>t==false);
        if(arrayTrue.length>arrayFalse.length){
            return true;
        }else if(arrayTrue.length<arrayFalse.length){
            return false;
        }else{
            return {error: "Need at least one boolean"}
        }

    }

    add(x, y){
        let stuff = []
        stuff.push(x, y)
    }
    
}

module.exports={
    Exercises
}