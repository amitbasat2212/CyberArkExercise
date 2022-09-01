const add = function(a, b){
    return a + b
}

const calculateHyp=(num,num2)=>{
    return Math.sqrt((num*num)+(num2*num2))
}


const removebugs1=(code1)=>{
    return code1.map(c => c != "BUG")
}


const clearLowPriority=(array)=>{
    return array.filter(o=>o.priority=="HIGH")
}

class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

class ArrayManipulator {
    manipulate(arr1, arr2) {
        let obj = {}
        if(arr1.length!=arr2.length){
            return "Array lengths don't match"
        }
        for (let i in arr1) {
            obj[arr1[i]] = arr2[i]
        }
        return obj
    }
}

module.exports = 
{
    add,
    calculateHyp,
    removebugs1,
    clearLowPriority,
    PictureManager,
    ArrayManipulator
}