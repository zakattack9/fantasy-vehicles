//http://slides.com/theremix/es6-oop#/5/4
class Vehicle {
  constructor(make, color, type) {
    this._make = make;
    this._color = color;
    this._type = type;
  }

  get vehicleDetails(){
    return `Your vehicle is a ${this.type}, made by ${this.make}, and is ${this.color}`;
  }

  set vehicleColor(color){
    this._color = color;
  }
}