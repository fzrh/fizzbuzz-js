describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number', function() {
    it('is divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('is NOT divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('is divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('is NOT divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('returns', function() {
    it("'Fizz' when divisible by 3", function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it("'Buzz' when divisible by 3", function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it("'FizzBuzz' when divisible by 3 and 5", function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });

    it('the number if it is not divisible by 3 or 5', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });
  });
});
