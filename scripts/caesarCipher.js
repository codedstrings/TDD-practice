export function caesarCipher(str, shiftVal) {
  validateInput(str, shiftVal);

  let cipheredStr = str
    .split("")
    .map((char) => {
      //iterate through array and shift each character
      return isAlphabet(char) ? shiftChar(char, shiftVal) : char;
    })
    .join("");

  return cipheredStr;
}

function validateInput(str, shiftVal) {
  if (typeof str !== "string" || typeof shiftVal !== "number") {
    throw new Error("Invalid inputs");
  }
}

function isAlphabet(char) {
  return /^[a-zA-Z]$/.test(char);
}

function shiftChar(char, shiftVal) {
  //preserve case
  let isUpperCase = /[A-Z]/.test(char) ? true : false;

  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let index = alphabetArr.indexOf(char.toLowerCase());

  //shifting
  index = (index + shiftVal) % alphabetArr.length;
  if (index < 0) index += alphabetArr.length; // in case of negative shift

  return isUpperCase
    ? alphabetArr[Math.abs(index)].toUpperCase()
    : alphabetArr[index];
}
