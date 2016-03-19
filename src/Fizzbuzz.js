var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0;
};

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleByThree(number) && this.isDivisibleByFive(number)) {
    return 'FizzBuzz';
  }
  else if (this.isDivisibleByThree(number)) {
    return 'Fizz';
  }
  else if (this.isDivisibleByFive(number)) {
    return 'Buzz';
  }
  else {
    return number;
  }
};
