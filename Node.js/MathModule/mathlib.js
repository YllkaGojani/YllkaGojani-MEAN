module.exports = function (){
  return {
    add: function(num1, num2) { 
        console.log("Sum of "+num1 + " and " + num2 + " is: ",num1+num2); 
    },
    multiply: function(num1, num2) {
        console.log("Multiple of "+num1 + " and " + num2 + " is: ",num1*num2);
    },
    square: function(num) {
        console.log("Square of " + num + " is: ", num*num); 
    },
    random: function(num1, num2) {
        console.log("Choose a random number between " + num1 + " and " + num2 + " : ",Math.floor(Math.random() * (num2 - num1)) + num1);
    }
  }
};