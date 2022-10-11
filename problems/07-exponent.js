/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power, num2 = 1) { // (num === 2, power === -2, num2 === 1)
    debugger
    if (power === 1) {
        debugger
        return num2
    }
    debugger
    if (power < 0) { // if power is negative
        debugger
        power = -1 * power // convert power to positive
        num = 1 / num // convert integer to fraction/decimal
        debugger
    }
    debugger
    if (num2 < num || num < 1) { // checks if accumulator is smaller than num, or if num is a deciaml
        debugger
        num2 = num // sets accumulator value to num (basically checking if it's the first iteration or if the power was negative)
        debugger
    }
    debugger
    num2 *= num
    power -= 1
    debugger

    return exponent(num, power, num2)
}

// console.log(exponent(3, 2)); // 9
console.log(exponent(2, -3)); // 1/4 (or 0.25)
// console.log(exponent(5, 5)); // 3125

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
