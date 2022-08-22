let users = []

const getData = function (callback) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callback()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)

const timer = function(){
    console.log(new Date())
  }
  
//   setInterval(()=>{
//     console.log(new Date())
//   }, 1000)



  const square=number => console.log(number**2)

square(4)


const getFormalTitle = (title,name)=>{return title+ " " + name}



let formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"



///////11.excriceses 


//excrcise 1

const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  const pushPull=(callback)=>{
    callback();
  }

  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"




  //excrise 2

  const returnTime = function (time) {
    alert('The current time is: ' + time)
  }

  const getTime=(callback)=>{
    let date =new Date();
    callback(date);
  }

  getTime(returnTime)


  //Exercise 3

  const displayData1 = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  const logData=(data) =>{
    console.log(data)
  }

  displayData1(alert, logData, "I like to party")


  //Exercise 4

  const sum=(num1,num2,num3)=>num1+num2+num3
  console.log(sum(1,2,3))


  //Exercise 6 - Arrow Functions

  const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather=temp=>{console.log("its"+" " +determineWeather(temp))}

  commentOnWeather(30) //returns "It's hot"
  commentOnWeather(22) //returns "It's cold"



  //excrcise 5 

const capitalize =(name)=>{
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()
}
console.log(capitalize("bOb")) // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia



  

  //Exercise 7


  const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")
  
