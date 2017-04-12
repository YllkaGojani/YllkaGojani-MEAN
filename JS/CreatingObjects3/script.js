function VehicleConstructor(name,numOfWheels,numOfPassangers,speed)
{
	this.distance_travelled = 0;
	this.name = name;
	this.numOfWheels = numOfWheels;
	this.numOfPassangers = numOfPassangers;
	this.speed = speed;
	this.makeANoise = function () {console.log("Beeeeeep");}
}
VehicleConstructor.prototype.move = function () {
		console.log(this.name + " is moving.");
		this.distance_travelled += this.speed;
		this.checkMiles();
		return this;
	}
VehicleConstructor.prototype.checkMiles = function () {console.log("Distance travelled: ",this.distance_travelled);}
VehicleConstructor.prototype.makeVIN = function()
		{
		    this.text = "";
		    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 14; i++ )
		        this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));

		   console.log(this.text);

		}

var Bike = new VehicleConstructor("BMX",2,1,10);
Bike.makeANoise = function () {console.log("ring ring!");}
Bike.makeANoise();
Bike.move().move();
Bike.makeVIN();

var Sedan = new VehicleConstructor("Sedan",4,4,80);
Sedan.makeANoise = function () {console.log("Honk Honk!");}
Sedan.makeANoise();
Sedan.move();
Sedan.makeVIN();

var Bus = new VehicleConstructor("Bus",8,40,100);
Bus.addPassangers = function (pickUp) {console.log("Total number of passangers: " + (Bus.numOfPassangers + pickUp));}
Bus.addPassangers(4);

