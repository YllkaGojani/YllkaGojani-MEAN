
// 1
	var first_variable;
	first_variable = "Yipee I was first!";
	console.log(first_variable);
	function firstFunc() {
		first_variable = "Not anymore!!!";
		console.log(first_variable);
	}
	console.log(first_variable);

// 2
	var food;
	food = "Chicken";
	function eat()
	{
		var food;
		food = "half-chicken";
		food = "gone";
		console.log(food);
	}
	eat();
	console.log(food);

// 3
	var new_word;
	new_word = "NEW!";
	function lastFunc() {
		new_word = "old";
	}
	console.log(new_word);	