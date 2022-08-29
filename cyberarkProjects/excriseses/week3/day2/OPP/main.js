
//spot check 1
class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children=[];
    }

    giveBirth(name){
        this.children.push(name);
    }

}

const dog = new Animal("rocket",4);
console.log(dog.name)

//spt check 2 

class Human {
    constructor(name,age,isFrendly){
        this.name=name;
        this.age=age;
        this.isFrendly=isFrendly;
    }

}


const humen1=new Human("amit",24,true);

console.log(`${humen1.name} ${humen1.age} ${humen1.isFrendly} `)



//spot check 3 
const cat = new Animal("Dolly",4)
cat.giveBirth("Dolly")
console.log(cat.children)

//spot check 4 

class Vehicle {
    static carsSold=0;
    constructor(x,y,speed,fual){
        this.x=x;
        this.y=y;
        this._speed=speed;
        this._fuel=fual;
        Vehicle.carsSold++;
    }
    
    static getInfo(){
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney(){
       console.log("Made " +Vehicle.carsSold * 30000 +" dollars"); 
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    get speed(){
        return this._speed
    }

    set fuel(fuel){
        if (fuel < 0 && fuel>150) {
            return console.log("fuel must be above 0 and under 150")
        }
        this._fuel=fuel;
    }

    get fuel(){
        return this._fuel 
    }
}

const car1 = new Vehicle(1,2,200)
const car2 = new Vehicle(1,3,300)
const car3= new Vehicle(1,3,300)
Vehicle.getInfo();


//spot check 5 

Vehicle.calculateMoney();
/////////



//spot check 6 
const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

const c1 = new Vehicle(3,1,500,2);

c.fuel=20;
console.log(c.fuel)



////////excrice 




