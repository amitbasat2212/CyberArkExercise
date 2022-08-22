const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}

const math = mathOperations()
console.log(math(1,2))


const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()
  increment()


  //spot check 1 

  const Family =()=>{
    let members=[];
    function birth(name) {
        members.push(name);
        console.log(members)
    }
    return birth;
  }

  const giveBirth = Family();
  giveBirth("amit");
  giveBirth("lora");
  giveBirth("nono");
  giveBirth("bobo");



 



