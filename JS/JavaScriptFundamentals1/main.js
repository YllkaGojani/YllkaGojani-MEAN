
// 1
	var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
	for (var i = 0; i <x.length; i++)
	{
		console.log(x[i]);
	}

// 2
	x.push(100);

// 3	
	x = ["hello", "world", "JavaScript is Fun"];
	for (var i = 0; i <x.length; i++)
	{
		console.log(x[i]);
	}

// 4
	var sum = 0;
	for (var j = 1; j <= 500; j++)
	{
		sum += j;
	}		
	console.log(sum);

// 5
	var min_val = [1, 5, 90, 25, -3, 0];
	var min = Infinity;
	for (var i = 0; i < min_val.length; i++) 
	{
		if (min_val[i] < min) 
		{
		    min = min_val[i];
		}
	}
	console.log(min);

// 6
	var avg_val = [1, 5, 90, 25, -3, 0];
	var sum = 0;
	for (var i = 0; i < avg_val.length; i++) 
	{
		sum += avg_val[i];
	}	
	console.log(sum/avg_val.length);

// 7
var newNinja = 
{
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'JavaScript', //like that's even a question!
	dojo: 'Dallas'
}

for (var index in newNinja)
{
	console.log(index,newNinja[index]);
}