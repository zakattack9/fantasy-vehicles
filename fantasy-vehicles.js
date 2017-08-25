//http://slides.com/theremix/es6-oop#/
class Vehicle{
  constructor(make, color, type){
    this._make = make;
    this._color = color;
    this._type = type;
  }

  get vehicleDetails(){
    return `Your vehicle is a ${this._type}, made by ${this._make}, and is ${this._color}.`;
  }

  set vehicleColor(color){
    if(color === 'string'){
      this._color = color;
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
    return `Your super car is a ${this._type}, made by ${this._make}, and is ${this._color} with a top speed of ${this._topSpeed} and total cost of ${this._cost}.`
  }

  set priceTag(cost){
    if(cost === 'number'){
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
    return `Your motorcycle is a ${this._type}, made by ${this._make}, and is ${this._color} with a top speed of ${this._topSpeed} and total cost of ${this._cost}.`
  }

  set bikeSpeed(topSpeed){
    if(topSpeed === 'number'){
      this._topSpeed = cost;
    }else{
      throw new TypeError('Motorcycle.topSpeed is not a number');
    }
  }
}

console.log(SuperCar.make);