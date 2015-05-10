/*
  In each of these examples some Ruby code is provided inline. Your job is to translate
  the Ruby code into JavaScript. Individual line comments (//) indicate where code should
  be placed.
*/

module.exports = {
  /*
    def return_array
      [1,2,3,4]
    end
  */

  returnArray: function() {
    return [1,2,3,4]

  },


  /*
    def divide(numerator, denominator)
      numerator / denominator
    end
  */

  divide: function(num1, num2){
    return (num1/num2)
  },

  /*
    def add(a,b)
      a + b
    end
  */

  add: function(num1, num2){
    return (num1 + num2)
  },

  /*
    def power(base, exponent)
      base ** exponent
    end
  */

  power: function(base, exponent){
    return Math.pow(base, exponent)
  },
  /*
    def concatenate(string_1, string_2)
      string_1 + string_2
    end
  */

  concatenate: function(st1, st2){
    return (st1 + st2)
  },
  /*
    def sub(string, char, replacement)
      string.sub(char, replacement)
    end
  */

  sub: function(string, char, replacement){
    return string.replace(char ,replacement)
  }

}
