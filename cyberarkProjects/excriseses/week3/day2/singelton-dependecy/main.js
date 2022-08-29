class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}


class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}


class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}


const weArePoor=false;
let animel;
if(weArePoor){
    animel = new Animal("Bumdo", "elephant",new CheapFeeder());

}else{
    animel = new Animal("Bumdo", "elephant",new LuxuryFeeder());

}

console.log(animel.eat());