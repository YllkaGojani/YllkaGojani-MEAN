function VehicleConstructor(name,numOfWheels,numOfPassangers)
{
	var vehicle = {};

	vehicle.name = name;
	vehicle.numOfWheels = numOfWheels;
	vehicle.numOfPassangers = numOfPassangers;
	vehicle.makeANoise = function () {console.log("Beeeeeep");}


	return vehicle;
}

var Bike = VehicleConstructor("BMX",2,1);
Bike.makeANoise = function () {console.log("ring ring!");}
Bike.makeANoise();
var Sedan = VehicleConstructor("Sedan",4,4);
Sedan.makeANoise = function () {console.log("Honk Honk!");}
Sedan.makeANoise();
var Bus = VehicleConstructor("Bus",8,40);
Bus.addPassangers = function (pickUp) {console.log("Total number of passangers: " + (Bus.numOfPassangers + pickUp));}
Bus.addPassangers(4);