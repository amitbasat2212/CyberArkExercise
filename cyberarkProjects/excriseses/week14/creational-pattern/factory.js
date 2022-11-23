"use strict";
class Passenger {
    constructor(name, vehicle) {
        this.name = name;
        this.vehicle = vehicle;
    }
}
class plane {
    constructor() {
        this.used = false;
        this.name = "plane";
    }
    transport(Passenger) {
        console.log(`${Passenger.name} wants plane `);
    }
}
class boat {
    constructor() {
        this.used = false;
        this.name = "boat";
    }
    transport(Passenger) {
        console.log(`${Passenger.name} wants boat`);
    }
}
class taxi {
    constructor() {
        this.used = false;
        this.name = "taxi";
    }
    transport(Passenger) {
        console.log(`${Passenger.name} wants taxi`);
    }
}
class bus {
    constructor() {
        this.used = false;
        this.name = "bus";
    }
    transport(Passenger) {
        console.log(`${Passenger.name} wants bus`);
    }
}
var VechileType;
(function (VechileType) {
    VechileType[VechileType["bus"] = 0] = "bus";
    VechileType[VechileType["taxi"] = 1] = "taxi";
    VechileType[VechileType["boat"] = 2] = "boat";
    VechileType[VechileType["plane"] = 3] = "plane";
})(VechileType || (VechileType = {}));
class TravelAgency {
    constructor() {
    }
    static getInstance() {
        if (!TravelAgency.instance) {
            TravelAgency.instance = new TravelAgency();
        }
        return TravelAgency.instance;
    }
    AddVechile(Vehicle) {
        TravelAgency.vechiles.push(Vehicle);
    }
    transportVechile(Passenger) {
        const index = TravelAgency.vechiles.findIndex(object => {
            return (object.name == Passenger.vehicle.name && object.used == false);
        });
        if (index > 0) {
            TravelAgency.vechiles[index].transport(passenger);
            TravelAgency.vechiles[index].used = true;
        }
        else if (TravelAgency.vechiles.every(value => value.used == true)) {
            TravelAgency.vechiles.forEach((e) => {
                e.transport(passenger);
            });
        }
        else {
            TravelAgency.vechiles[Math.floor(Math.random() * index) + 1].transport(passenger);
        }
    }
}
TravelAgency.vechiles = [];
const TravelAgencyFactory = TravelAgency.getInstance();
const passenger = new Passenger("amit", new plane());
const passenger1 = new Passenger("sholm", new plane());
TravelAgencyFactory.AddVechile(new bus);
TravelAgencyFactory.AddVechile(new bus);
TravelAgencyFactory.AddVechile(new bus);
TravelAgencyFactory.AddVechile(new bus);
TravelAgencyFactory.AddVechile(new plane);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new taxi);
TravelAgencyFactory.AddVechile(new boat);
TravelAgencyFactory.AddVechile(new boat);
TravelAgencyFactory.AddVechile(new boat);
TravelAgencyFactory.transportVechile(passenger);
TravelAgencyFactory.transportVechile(passenger1);
