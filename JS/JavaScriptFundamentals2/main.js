var i;
var sum = 0;
var min_val = [1, 5, 90, 25, -3, 0];
var min = Infinity;
var sumIt;
var findMin;
var findAvg;
var func_obj;
var person;


// 1.1
function sumIt(param1,param2)
{
	for(i = param1; i <= param2; i++)
	{
		sum += i;
	}
	console.log(sum);
}

// 1.2
function findMin(array)
{	
	for (i = 0; i < array.length; i++) 
	{
		if (array[i] < min) 
		{
		    min = array[i];
		}
	}
	return min;
}

// 1.3
function findAvg(array)
{
	for (var i = 0; i < array.length; i++) 
	{
		sum += array[i];
	}	
	return (sum/array.length);
}

sumIt(0,9);
console.log(findMin(min_val));
console.log(findAvg(min_val));

// 2
var sumIt = function(param1,param2)
{
	for(i = param1; i <= param2; i++)
	{
		sum += i;
	}
	console.log(sum);
};

var findMin = function(array)
{	
	for (i = 0; i < array.length; i++) 
	{
		if (array[i] < min) 
		{
		    min = array[i];
		}
	}
	return min;
};

var findAvg = function (array)
{
	for (var i = 0; i < array.length; i++) 
	{
		sum += array[i];
	}	
	return (sum/array.length);
};

// 3
var func_obj = {
	sumIt : function(param1,param2)
		{
			for(i = param1; i <= param2; i++)
			{
				sum += i;
			}
			console.log(sum);
		},
	findMin : function(array)
		{	
			for (i = 0; i < array.length; i++) 
			{
				if (array[i] < min) 
				{
				    min = array[i];
				}
			}
			return min;
		},
	findAvg : function (array)
		{
			for (var i = 0; i < array.length; i++) 
			{
				sum += array[i];
			}	
			return (sum/array.length);
		}
};

// 4
var person = {
	name : "Yllka",
	distance_traveled : 0,
	say_name :  function() {
		alert (person.name);
	},
	say_something : function (param1)	{
		console.log(person.name + " says : " + param1);
	},
	walk : function ()	{
		console.log(person.name + " is walking");
		person.distance_traveled += 3;
	},
	run : function ()	{
		console.log(person.name + " is runing");
		person.distance_traveled += 10;
	},
	crawl : function ()	{
		console.log(person.name + " is crawling");
		person.distance_traveled += 1;
	}	
};

var name = person.say_name();
var some = person.say_something("Hello there!");
var uWalk = person.walk();
var distance = person.distance_traveled;
console.log(distance);
var uRun = person.run();
distance = person.distance_traveled;
console.log(distance);
var uCrawl = person.crawl();
distance = person.distance_traveled;
console.log(distance);