function VehicleConstructor(name,numOfWheels,numOfPassangers,speed)
{
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		distance_travelled += speed;
		console.log(distance_travelled);
	}
	this.name = name;
	this.numOfWheels = numOfWheels;
	this.numOfPassangers = numOfPassangers;
	this.makeANoise = function () {console.log("Beeeeeep");}
	this.move = function () {
		updateDistanceTravelled();
		this.makeANoise();
	}
	this.checkMiles = function () {console.log(distance_travelled);}
	if (!(this instanceof VehicleConstructor)) {
		return new VehicleConstructor(name,numOfWheels,numOfPassangers,speed);
	}
}
var Bike = new VehicleConstructor("BMX",2,1,10);
Bike.makeANoise = function () {console.log("ring ring!");}
Bike.makeANoise();

var Sedan = new VehicleConstructor("Sedan",4,4,80);
Sedan.makeANoise = function () {console.log("Honk Honk!");}
Sedan.makeANoise();

var Bus = new VehicleConstructor("Bus",8,40,100);
Bus.addPassangers = function (pickUp) {console.log("Total number of passangers: " + (Bus.numOfPassangers + pickUp));}
Bus.addPassangers(4);

