var _, MAPhelper,REDUCEhelper,FINDhelper,FILTERhelper,REJECThelper,back;

var _ = {
	map:function(array,callFunc){
		for(var i = 0; i < array.length; i++)
		{
			return callFunc(array[i]);
		}
	},
	reduce:function(array,callFunc,memo){
		back = 0;
		for(var i = 0; i <array.length; i++)
		{
			back = callFunc(back,array[i]);
		};
		return callFunc(back,memo);
	},
	find:function(array,callFunc){
		for(var i = 0; i < array.length; i++)
		{
			back = callFunc(array[i]);
			if(back != false)
			{console.log(array[i]);break;}
		};
		
	},
	filter:function(array,callFunc){
		for(var i = 0; i < array.length; i++)
		{
			back = callFunc(array[i]);
			if(back != false)
			{console.log(array[i]);}
		};
		
	},
	reject:function(array,callFunc){
		for(var i = 0; i < array.length; i++)
		{
			back = callFunc(array[i]);
			if(back != true)
			{console.log(array[i]);}
		};
		
	}
}

/*MAPhelper = function (num) {return num*2;}
_.map([1,2,3],helper1);

REDUCEhelper = function(val1,val2){return val1+val2};
console.log(_.reduce([1,2,3,4,5],REDUCEhelper,2));

FINDhelper = function (num) {return num % 2 == 0};
_.find([1,2,3,4],FINDhelper);

FILTERhelper = function (num) {return num % 2 == 0};
_.filter([1,2,3,4],FILTERhelper);
*/

REJECThelper = function (num) {return num % 2 == 0};
_.reject([1,2,3,4],REJECThelper);