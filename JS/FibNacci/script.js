function fib() {
  var start = 0;
  var next = 1;
  function nacci() {
    console.log(next);
    var temp = start;
    start = next;
    next += temp;
  }
  return nacci
}
var fibCounter = fib();
              // if we invoke the counter function
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()