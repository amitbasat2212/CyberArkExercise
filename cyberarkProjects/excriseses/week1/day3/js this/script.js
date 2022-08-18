
//excrises 1
const person = {
    username: "Felicia",
    introduce: function(){
      console.log(this.username)
    }
  }
  
  person.introduce() //prints "Hi, I'm Felicia"


  const person1 = {
    hungry: true,  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }  
  
  person1.feed() //should alert "I'm no longer hungry"


  //excricese 2
  const pump = function (amount) {
    let liters=0;
    liters += amount;
    console.log('You put ' + amount + ' liters in ' + name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//excrcies3

  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel:0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());


  //excrisce 4 

  const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins:function(num){
      this.coinCount-=num;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount)
  

  //excrsice 5 
  const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: "+ result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!",
  

  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that.",
    
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);


  //excrice 6 
  const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte:{beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 10},
      doubleShot: {beanRequirement: 15, price: 5},
      frenchPress: {beanRequirement: 12, price: 12}
    },
    money:200,
    
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method
     
     
        if(drinkType in this.drinkRequirements){
          console.log("makes a drink")
          if(this.beans>=this.drinkRequirements[drinkType].beanRequirement){
            this.beans-=this.drinkRequirements[drinkType].beanRequirement
          }else{
            console.log("Sorry, we’re all out of beans!")
          }
        }else{
          console.log("Sorry, we don’t make "+ drinkType)
        }

    
    },
    buyBeans:function(numBeans) {
      this.beans+=numBeans;
      this.money-=5;
      if(this.money==0){
        console.log("out of money")
      }
    },

    buydrink:function(drinkType){
      if(drinkType in this.drinkRequirements){
        this.money-=this.drinkRequirements[drinkType].price
        this.makeDrink(drinkType)
      }
    }


       

  }
  
  // coffeeShop.makeDrink("latte"); 
  // coffeeShop.makeDrink("americano");
  // coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  // coffeeShop.makeDrink("doubleShot");
  // coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


  coffeeShop.buydrink("latte"); 
  coffeeShop.buydrink("americano");
  coffeeShop.buydrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.buydrink("doubleShot");
  coffeeShop.buydrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"



  


  
  
  