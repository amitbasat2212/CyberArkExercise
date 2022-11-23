class User{
    constructor(id,name,passwored){
        this.id=id;
        this.name=name
        this.passwored=passwored
    }
    toStringnew() {
        return `{id: "${this.id}", name: ${this.name},passwored: ${this.passwored}}`;
    }
    accept(visitor) {
        visitor.visitUser(this);
    }
}

class Asset{
    constructor(serialNumber,owner,rating){
        this.serialNumber=serialNumber
        this.owner=owner
        this.rating=rating
    }
    accept(visitor) {
        visitor.visitAsset(this);
    }
    
    toStringnew() {
        return `{serialNumber: "${this.serialNumber}", owner: ${this.owner},rating: ${this.rating}}`;
    }
}

////



  class Visitor {   
   
    visitUser(User) {
        console.log(User.toStringnew()  )  
    }
    visitAsset(Asset) {
        console.log(Asset.toStringnew())
    }
  }
  
  const appliances = [];
  appliances.push(new User(1,3,5));
  appliances.push(new Asset(3,2,5));
  const visitor = new Visitor();
  for (const appliance of appliances) {
    (appliance.accept(visitor));
  }

