exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  var x;
  for(var i = 0, j = 1, k = 0; k < n; i = j, j = x, k++){
    if (i >= n) {
      break;
    }
    console.log('i', i);
    x = i + j;
    if (x % 2 === 0) {
      sum += x;
    }
    console.log('sum', sum);
  }
  return sum;
};