


class Passenger{
    name:String
    vehicle:Vehicle
    constructor(name:String,vehicle:Vehicle){
        this.name=name
        this.vehicle=vehicle
    }
}

interface Vehicle {
    used:Boolean
    name:String
    transport(Passenger:Passenger): void;
  }

class plane implements Vehicle {
    used=false
    name="plane"
    transport(Passenger:Passenger){
        console.log(`${Passenger.name} wants plane `)
    }
}

class boat implements Vehicle {
    used=false
    name="boat"
    transport(Passenger:Passenger){
        console.log(`${Passenger.name} wants boat`)
    }
}


class taxi implements Vehicle {
    used=false
    name="taxi"
    transport(Passenger:Passenger){
        console.log(`${Passenger.name} wants taxi`)
    }
}


class bus implements Vehicle {
    used=false
    name="bus"
    transport(Passenger:Passenger){
        console.log(`${Passenger.name} wants bus`)
    }
}



enum VechileType {
    bus,
    taxi,
    boat,
    plane
}
  
  class TravelAgency {   
        private static instance: TravelAgency;
        private static vechiles:Vehicle[]=[]
        private constructor() {       
            

        }
      
        public static getInstance(): TravelAgency {
          if (!TravelAgency.instance) {
            TravelAgency.instance = new TravelAgency();
          }
          return TravelAgency.instance;
        }     

        public AddVechile(Vehicle:Vehicle){
            TravelAgency.vechiles.push(Vehicle)
        }

        public transportVechile(Passenger: Passenger) {
            const index = TravelAgency.vechiles.findIndex(object => {
                return (object.name==Passenger.vehicle.name && object.used==false);
              }); 
            
            if(index>0){
                TravelAgency.vechiles[index].transport(passenger)
                TravelAgency.vechiles[index].used=true

            }else if(TravelAgency.vechiles.every(value => value.used == true) ){               
               TravelAgency.vechiles.forEach((e)=>{
                e.transport(passenger)
            })

            }else{
                TravelAgency.vechiles[Math.floor(Math.random() * index) + 1].transport(passenger)
            }

        }
  }

  const TravelAgencyFactory = TravelAgency.getInstance();
  const passenger:Passenger= new Passenger("amit",new plane())
  const passenger1:Passenger= new Passenger("sholm",new plane())
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
  
  TravelAgencyFactory.transportVechile(passenger)
  TravelAgencyFactory.transportVechile(passenger1)
  
