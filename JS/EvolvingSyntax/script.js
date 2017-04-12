"use strict" 

var runningLogger = () => console.log("I am running!");

var multiplyByTen = (num) => console.log(num*10);

var stringReturnOne = () => console.log("Invoked stringReturnOne");


var stringReturnTwo = () => console.log("Invoked stringReturnTwo");


var caller = (param1) =>{	if(typeof param1 == "function")
								{
									console.log(param1());
								}
	};


var myDoubleConsoleLog = (param1,param2) => {	if(typeof param1 == "function" && typeof param2 == "function")
													{
														console.log(param1() + " and " + param2());
													}};
	

var caller2 = (param1) => { console.log("starting...");
	if(typeof param1 == "function")
	{
		setTimeout(param1(stringReturnOne,stringReturnTwo), 2000);
	}
	console.log("ending?");
	return "interesting";
}
//caller2(myDoubleConsoleLog);
runningLogger();
multiplyByTen(2);
stringReturnOne();
stringReturnTwo();
caller(stringReturnOne);
myDoubleConsoleLog(stringReturnOne,stringReturnTwo);
console.log(caller2(myDoubleConsoleLog));