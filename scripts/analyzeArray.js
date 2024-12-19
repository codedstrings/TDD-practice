export function analyzeArray(arr) {
    let arrObj = {
        average: null,
        min: null,
        max: null,
        length: 0,
    };

    if (!Array.isArray(arr)) {
        throw new Error("Input should be an array");
    }
    if (arr.length === 0) {
        return arrObj;
    }

    arrObj.length = arr.length;
    arrObj.min = Math.min(...arr);
    arrObj.max = Math.max(...arr);
    arrObj.average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

    return arrObj;
}