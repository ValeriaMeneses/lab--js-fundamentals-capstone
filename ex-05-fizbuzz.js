/**
 * fizzbuzz()
 *
 * write a function that returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
**/


function fizzbuzz(number){
  // console.log(number);
  var cadena = ''
  for (var i = 1; i <= number; i++) {
    // console.log(i);
    if (i%3 === 0  &&  i%5 === 0) {
      // console.log('FizZBuzZ');
      cadena += 'FizZBuzZ'

    }else if (i%3 === 0) {
      // console.log('fizz');
      cadena += 'fizz'

    }else if (i%5 === 0) {
      // console.log('buzz');
      cadena +='buzz'

    }else {
      // console.log('.');
      cadena += '.'
    }
  }
  console.log(cadena);
  return cadena
}

/**
 * Ex. fizzbuzz(3) === "..fizz"
 *
 * For 1 returns .
 * For 2 returns .
 * For 3 returns fizz
 * Result: ..fizz
 */

console.log("[1] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ'");
console.assert(fizzbuzz(1) === ".")
console.log("====================================================================================================");
console.log();

console.log("[2] Should return '..")
console.assert(fizzbuzz(2) === "..")
console.log("====================================================================================================");
console.log();

console.log("[3] Should return '..fizz")
console.assert(fizzbuzz(3) === "..fizz")
console.log("====================================================================================================");
console.log();

console.log("[4] Should return '..fizz.buzz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.log("====================================================================================================");
console.log();

console.log("[5] Should return '..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.log("====================================================================================================");
console.log();

console.log("[6] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.")
console.assert(fizzbuzz(19) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.")
console.log("====================================================================================================");
console.log();

console.log("[7] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")
console.log("====================================================================================================");
console.log();

console.log("[8] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz")
console.assert(fizzbuzz(27) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz")
console.log("====================================================================================================");
console.log();

console.log("[9] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ")
console.assert(fizzbuzz(30) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ")
console.log("====================================================================================================");
