// @ts-check

/**
 *
 * @param {String} string
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *
 * @param {String} string
 */
function reverseString(string) {
  let reverseString = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reverseString += string.charAt(index);
  }

  return reverseString;
}

const calculator = {
  /**
   *
   * @param {number} number1
   * @param {number} number2
   */
  add: (number1, number2) => {
    return number1 + number2;
  },
  subtract: (number1, number2) => {
    return number1 - number2;
  },
  divide: (number1, number2) => {
    return number1 / number2;
  },
  multiply: (number1, number2) => {
    return number1 * number2;
  },
};

/**
 *
 * @param {String} string
 * @param {number} shiftFactor
 */
function caesarCipher(string, shiftFactor) {
  const words = string.replace(/\p{P}/gu, "").split(" ");
  console.log(words);

  /**
   * @type {string[]}
   */
  const alphabet = [];
  for (let index = 0; index < 26; index++) {
    alphabet[index] = String.fromCharCode(65 + index);
  }

  /**
   * @type {Array.<string>}
   */
  const shiftedAlphabet = [];
  for (let index = 0; index < 26; index++) {
    shiftedAlphabet[index] = alphabet[(index + shiftFactor + 26) % 26];
  }

  /**
   *
   * @param {String} char
   * @returns
   */
  function getIndexOfChar(char) {
    return alphabet.findIndex((element) => element === char);
  }
  const cipher = [];

  words.forEach((word) => {
    console.log(getIndexOfChar("H"));

    let stringArray = word.split("");
    console.log(stringArray);

    let cipherWord = "";

    for (let index = 0; index < stringArray.length; index++) {
      const element = stringArray[index].toUpperCase();
      cipherWord += element.replace(
        element,
        shiftedAlphabet[getIndexOfChar(element.toUpperCase())]
      );
    }

    console.log(cipherWord);
    cipher.push(cipherWord);

    console.log(alphabet);

    console.log(shiftedAlphabet);

    console.log(cipher);
  });

  console.log(cipher.join(" "));

  return cipher.join(" ");
}

/**
 *
 * @param {number[]} array
 * @returns {{average: number, min: number, max: number, length: number}}
 *
 */
function analyzeArray(array) {
  const average =
    array.reduce((prev, cur) => {
      return prev + cur;
    }, 0) / array.length;

  const max = Math.max(...array);
  const min = Math.min(...array);

  console.log(max);

  /**
   * @type {{average: number, min: number, max: number, length: number}}
   */
  const returnObject = {
    average: average,
    min: min,
    max: max,
    length: array.length,
  };

  return returnObject;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
