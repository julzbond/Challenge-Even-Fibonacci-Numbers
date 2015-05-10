exports.sumOfEvenFibonacciNumbers = function (n){
  var fibArray = [];
  fib[0] = 1;
  fib[1] = 1;
  var i = 1;
  do{
    fibArray.push(fibArray[i] + fibArray[i-1]);
    i++;
  } while (fibArray[i] < n);

  var fibArrayEven = [];
  for (var j = 0; j < fibArray.length; j++){
    if(fibArray[j] % 2 === 0) {
      fibArrayEven.push(fibArray[j]);
    }
  }

  var sum = 0;
  for (var k = 0; k < fibArrayEven.length; k++){
    sum += fibArrayEven[k];
  }
  return sum;
}