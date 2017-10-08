/**
 * censorBadWords()
 *
 * Write a function called censorBadWords()that returns
 * It should remove bad words in its input sentence and replace them with ****.
 *
 *
**/

function censorBadWords(array,stringInput) {
  var arrayOfString = stringInput.split(' ')
  // console.log(arrayOfString);
  for (var i = 0; i < arrayOfString.length; i++) {
    var palabra = arrayOfString[i]
    if (array.indexOf(palabra) !== -1) {
      arrayOfString[i] = '****'
    }
  }
  console.log(arrayOfString.join(' '));
  return arrayOfString.join(' ')

}

var badWordsList = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']
var badWords2 = ['idiot',  'crap', 'freaking']

var censored1 = censorBadWords(badWordsList, "mom get the heck in here and bring me a darn sandwich")
var censored2 = censorBadWords(badWordsList, "here son, your crappy sandwich is on the dang plate")
var censored3 = censorBadWords(badWords2, "your freaking idiot dog left crap on my floor")

console.log("[1] Expected: 'mom get the **** in here and bring me a **** sandwich'");
console.assert( censored1 === "mom get the **** in here and bring me a **** sandwich")
console.log("=====================================================================");
console.log();

console.log("[2] Expected: 'here son, your **** sandwich is on the **** plate'");
console.assert( censored2 === "here son, your **** sandwich is on the **** plate")
console.log("=====================================================================");
console.log();

console.log("[3] Expected: 'your **** **** dog left **** on my floor'");
console.assert( censored3 === "your **** **** dog left **** on my floor")
console.log("=====================================================================");
