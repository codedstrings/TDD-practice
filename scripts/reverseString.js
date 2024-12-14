const reverseString = function (str) {
    if (typeof str !== "string") {
        throw new Error("Invalid input, expected a string");
    }
    return str.split('').reverse().join('');
}

export { reverseString }