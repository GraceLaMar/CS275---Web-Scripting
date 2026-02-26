function add(a,b) {
    if (typeof a !== "number" || typeof b !== "number") return null;
    return a + b;
}

console.assert(add(2,3) === 5,"2 + 3 should equal 5");

console.assert(add("cat","dog") === null,"Strings should return null");

console.assert(add(null,5) === null,"Null values should return null");

function min(a,b) {
    if (typeof a !== "number" || typeof b !== "number") return null;
    return a < b ? a : b;
}

console.assert(min(3,8) === 3,"3 is smaller than 8"); 

console.assert(min("3",8) === null,"Strings should return null");

console.assert(min(null,8) === null,"Null values should return null");

function max(a,b) {
    if (typeof a !== "number" || typeof b !== "number") return null;
    return a > b ? a : b;
}

console.assert(max(3,8) === 8,"8 is greater than 3"); 

console.assert(max("3",8) === null,"Strings should return null");

console.assert(max(null,8) === null,"Null values should return null");

function isEven(n) {
    if (typeof n !== "number") return false;
    return n % 2 === 0;
}

console.assert(isEven(4) === true,"4 is even"); 

console.assert(isEven("4") === false,"Strings should return false"); 

console.assert(isEven(null) === false,"Null should return false"); 

function sumArray(arr) {
    if (!Array.isArray(arr)) return null;

    let sum = 0

    for (let value of arr) {
        if (typeof value !== "number") return null;
        sum += value;
    }

    return sum;
}

console.assert(sumArray([1,2,3]) === 6, "Sum should be 6");

console.assert(sumArray([1,"2",3]) === null, "Mixed types should return null");

console.assert(sumArray(null) === null, "Null should return null");

function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    const sum = sumArray(arr);
    if (sum === null) return null;

    return sum / arr.length;
}

console.assert(average([2,4,6]) === 4, "Average should be 4");

console.assert(average([2,"4",6]) === null, "Mixed types should return null");

console.assert(average(null) === null, "Null should return null");
