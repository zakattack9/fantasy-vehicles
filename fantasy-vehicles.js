//http://slides.com/theremix/es6-oop#/
class Vehicle {
  constructor(make, color, type){
    this._make = make;
    this._color = color;
    this._type = type;
  }

  get vehicleDetails(){
    return `Your vehicle is a ${this._type}, made by ${this._make}, and is ${this._color}.`;
  }

  set vehicleColor(color){
    if(typeof color === 'string'){
      this._color = color;
    }else{
      throw new TypeError('Vehicle.color is not a string');
    }
  }

  set make(make){
    if(typeof make === 'string'){
      this._make = make;
    }else{
      throw new TypeError('Vehicle.color is not a string');
    }
  }
}

class SuperCar extends Vehicle{
  constructor(make, color, type, topSpeed, cost){
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  get superCarDetails(){
    return `Your super car is a ${this._type}, made by ${this._make}, and is ${this._color} with a top speed of ${this._topSpeed} mph and total cost of ${this._cost} million.`
  }

  set priceTag(cost){
    if(typeof cost === 'number'){
      this._cost = cost;
    }else{
      throw new TypeError('SuperCar.cost is not a number');
    }
  }
}

class Motorcycle extends Vehicle{
  constructor(make, color, type, topSpeed, cost){
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  get bikeDetails(){
    return `Your motorcycle is a ${this._type}, made by ${this._make}, and is ${this._color} with a top speed of ${this._topSpeed} mph and total cost of ${this._cost} dollars.`
  }

  set bikeSpeed(topSpeed){
    if(typeof topSpeed === 'number'){
      this._topSpeed = topSpeed;
    }else{
      throw new TypeError('Motorcycle.topSpeed is not a number');
    }
  }
}

//Vehicle and Subclass Instances
/*let truck = new Vehicle("Toyota", "Barf Green", "4Runner");
console.log(truck.vehicleDetails);
truck.vehicleColor = "Cruddy Brown";
console.log(truck._color);

let lykanHypersport = new SuperCar("WMotors", "Pristine White", "Lykan Hypersport", 245, 3.4);
console.log(lykanHypersport.superCarDetails);
lykanHypersport.priceTag = 5.1;
console.log(lykanHypersport._cost + " million dollars");

let NhemeSis = new Motorcycle("Yamaha", "Flamin' Gold", "BMS Nheme-sis", 180, 500000);
console.log(NhemeSis.bikeDetails);
NhemeSis.bikeSpeed = 200;
console.log(NhemeSis._topSpeed + "mph");*/

class Missle{
  constructor(missleName, creator){
    this._creator = creator;
    this._missleName = missleName;
  }
}

class Target extends Missle{
  constructor(missleName, destination, timeToDest, missleSpeed, distance, estDeathToll, sender){
    super(missleName);
    this._destination = destination;
    this._timeToDest = timeToDest;
    this._missleSpeed = missleSpeed;
    this._distance = distance;
    this._estDeathToll = estDeathToll;
    this._sender = sender;
  }

  //this is actually legit and properly calculates time depending on the speed of the missle
  timeToDestCalculator(newSpeed){
    let distanceToTimeRatio = this._timeToDest / this._distance;
    if(newSpeed >= this._missleSpeed){
      let subtractedTimeToDest = distanceToTimeRatio * (newSpeed - this._missleSpeed);
      this._timeToDest = (this._timeToDest - subtractedTimeToDest).toFixed(2);
    }else if(newSpeed < this._missleSpeed){
      let addedTimeToDest = distanceToTimeRatio * (this._missleSpeed - newSpeed);
      this._timeToDest = (this._timeToDest + addedTimeToDest).toFixed(2);
    }
  }

  get targetInfo(){
    return `A missle sent from ${this._sender} called, ${this._missleName} will be heading to ${this._destination}, taking ${this._timeToDest} hours at a constant speed of ${this._missleSpeed} miles per hour over a total distance of ${this._distance} miles with a calculated population death of ${this._estDeathToll} people.`
  }

  set missleSpeed(newSpeed){
    if(typeof newSpeed === 'number'){
      if(newSpeed >= 300){
        this.timeToDestCalculator(newSpeed);
      }else{
        console.log(newSpeed + ' is too slow; missles must go faster than at least 300mph');
        return 'Target.newSpeed is too slow; missles must go faster than at least 300mph';
      }
    }else{
      throw new TypeError('Target.newSpeed is not a number');
    }
  }

  set deathToll(estDeathToll){
    if(typeof estDeathToll === 'number'){
      if(estDeathToll < 100000){
        return 'Missle is not powerful enough';
      }else{
        this._estDeathToll = estDeathToll;
      }
    }else{
      throw new TypeError('Target.deathToll is not a number');
    }
  }
}

let northKorea = new Target("808Bomber", "North Korea", 9.5, 475, 4550, 1000000, "Hawaii"); //distance from Hawaii to North Korea is accurate as well as the time to there
northKorea.missleSpeed = 450;
console.log(northKorea.targetInfo);