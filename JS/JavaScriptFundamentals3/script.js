var person = {};
var ninja = {};
var belt_level_n = ['Yellow Belt','Red Belt', 'Black Belt'];
function personConstructor (name)
{
	person = {
		name : name,
		distance_traveled : 0,
		say_name : function(){alert (person.name);},
		say_something : function (something){console.log(person.name + " says: " + something);},
		walk : function(){
			alert (person.name + " is walking");
			person.distance_traveled += 3;
		},
		run : function(){
			alert (person.name + " is running");
			person.distance_traveled += 10;
		},
		crawl : function(){
			alert (person.name + " is crawling");
			person.distance_traveled += 1;
		}
	};
	return person;
}

function ninjaConstructor (name)
{
	ninja = {
		name : name,
		cohort : function(cohort){alert ('Cohort: ' + cohort);},
		belt_level : belt_level_n[0],
		levelUp : function(){
			if(ninja.belt_level == belt_level_n[0])
				{ninja.belt_level = belt_level_n[1];}
			else{ninja.belt_level = belt_level_n[2];}
		}
	};
	return ninja;
}

personConstructor('Yllka');

ninjaConstructor('YllkaSan');