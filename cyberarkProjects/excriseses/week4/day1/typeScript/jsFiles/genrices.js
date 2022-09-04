"use strict";
// function calc<Type>(num: Type): Type {
//     return num;
// }
// const first_name = calc<string>('John');
// const full_name = first_name + ' Sagi'; // No error is thrown.
// class ImageType<DataType> {
//     data: DataType;
//     height: number;
//     width: number;
//     constructor(data: DataType, height: number, width: number) {
//         this.data = data;
//         this.height = height;
//         this.width = width
//     };
// }
// const imageType = new ImageType<string>(“John”, 480, 640);
//excrice 1 
function sum(num) {
    let sum = 0;
    if (Array.isArray(num)) {
        if (typeof num[0] === "string") {
            let elementNum = [];
            num.forEach(element => {
                if (!isNaN(element)) {
                    elementNum.push(parseInt(element));
                }
            });
            sum = sumofAnArry(elementNum);
            return sum;
        }
        else if (typeof num[0] === "number") {
            sum = sumofAnArry(num);
            return sum;
        }
    }
    else if (typeof num === "number") {
        return num;
    }
    else if (typeof num == "string") {
        if (isNumber(num)) {
            return parseInt(num);
        }
    }
}
function sumofAnArry(Array) {
    let sum = 0;
    Array.forEach(element => {
        if (!isNaN(element)) {
            sum += element;
        }
    });
    return sum;
}
function isNumber(str) {
    if (typeof str !== 'string') {
        return false;
    }
    if (str.trim() === '') {
        return false;
    }
    return !Number.isNaN(Number(str));
}
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
//excrice2
class Generics {
    constructor(GenericeArray1) {
        this.GenericeArray = GenericeArray1;
    }
    addNumber(data1) {
        this.GenericeArray.push(data1);
    }
    sumofAnArry(Array) {
        let sum = 0;
        Array.forEach(element => {
            if (!isNaN(element)) {
                sum += element;
            }
        });
        return sum;
    }
    sum(num) {
        let sum = 0;
        if (Array.isArray(num)) {
            if (typeof num[0] === "string") {
                let elementNum = [];
                num.forEach(element => {
                    if (!isNaN(element)) {
                        elementNum.push(parseInt(element));
                    }
                });
                sum = sumofAnArry(elementNum);
                return sum;
            }
            else if (typeof num[0] === "number") {
                sum = sumofAnArry(num);
                return sum;
            }
        }
        else if (typeof num === "number") {
            return num;
        }
        else if (typeof num == "string") {
            if (isNumber(num)) {
                return parseInt(num);
            }
        }
    }
}
const numbers1 = new Generics(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new Generics([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum(["test", 22, 55, "block", "9"])}`);
console.log(`2: ${numbers1.sum([1, 22, 55, 10, 10])}`);
//# sourceMappingURL=genrices.js.map