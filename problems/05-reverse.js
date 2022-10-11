/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str, reverseString = '') {
  debugger
  if (reverseString.length >= str.length) {
    debugger
    return reverseString
    debugger
  }
  debugger
  let lastLetter = str[str.length - 1 - reverseString.length]
  debugger

  debugger
  reverseString += lastLetter
  debugger

  debugger
  let nextStep = reverse(str, reverseString)
  debugger

  debugger
  return nextStep
  debugger
}

reverse('house')
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
