const person = {
    name: "Julius",
    speak: function(food) {
      console.log(food)
    }
  } 


  person.speak("chezze")



  const isEvan = function(number ) {
    if(number%2===0){
        return true
    }
    return false;
  }

  console.log(isEvan(2))


  function loopArray(arr){
    for (let index = 0; index < arr.length; index++) {
        if(!isEvan(arr[index])){
            console.log(arr[index])
        }
        
    }
  }

  loopArray([2,5,7,4,3,2])




  function excites(arr,num){
    let num1=arr.indexOf(num)
    if(num1>-1){
        return true
    }
    return false;
  }

  console.log(excites([2,5,7,4,3,2],2))




  const calculator={
    add:function(num1,num2){
        return num1+num2
    },
    subtract:function(num1,num2){
        return num1>num2?num1-num2:num2-num1
    }

  }

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42




const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) 

function increaseByNameLength (money,name){
    return name.length*money;
}

function makeRegal(name){
    return "His Royal Highness,"+ " " +name;
}