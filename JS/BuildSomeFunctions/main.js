var mult_result;
var stringOne;
var stringTwo;
// 1
function runningLogger()
{
	console.log("I am running!");
}

// 2
function multiplyByTen(num)
{
	mult_result = num * 10;
	return mult_result;
}

// 3
function stringReturnOne()
{
	stringOne = "Invoked stringReturnOne";
	return stringOne;
}

function stringReturnTwo() {
	stringTwo = "Invoked stringReturnTwo";
	return stringTwo;
}

// 4
function caller(param1)
{
	if(typeof param1 == "function")
	{
		console.log(param1());
	}
}

// 5
function myDoubleConsoleLog(param1,param2)
{
	if(typeof param1 == "function" && typeof param2 == "function")
	{
		console.log(param1() + " and " + param2());
	}
}

// 6
function caller2(param1)
{
	console.log("starting...");
	if(typeof param1 == "function")
	{
		setTimeout(param1(stringReturnOne,stringReturnTwo), 2000);
	}
	console.log("ending?");
	return "interesting";
}

runningLogger();
console.log(multiplyByTen(5));
console.log(stringReturnOne());
console.log(stringReturnTwo());
caller("Hello");
caller(stringReturnTwo);
myDoubleConsoleLog("Hello",stringReturnTwo);
myDoubleConsoleLog(stringReturnOne,stringReturnOne);
console.log(caller2(myDoubleConsoleLog));