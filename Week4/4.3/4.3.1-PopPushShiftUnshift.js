const nums = [6, 5, 2, 3, 4, 1, 0];

// remove each of the last two items with pop(), saving each item to a variable
const popA = nums.pop();
console.log("popA: ", popA, nums);

const popB = nums.pop();
console.log("popB: ", popB, nums);

// remove each of the first two items with shift(), saving each item to a variable
const shiftA = nums.shift();
console.log("shiftA: ", shiftA, nums);

const shiftB = nums.shift();
console.log("shiftB: ", shiftB, nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(popB);
console.log("unshift popB", popB, nums);

nums.unshift(popA);
console.log("unshift popA", popA, nums);

nums.push(shiftB);
console.log("push shiftB", shiftB, nums);

nums.push(shiftA);
console.log("push shiftA", shiftA, nums);

console.log("final nums:", nums);




What I had from doing it myself :
const arr = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = arr.pop();
console.log(popReturn);
console.log(arr);
// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = arr.shift();
console.log(shiftReturn);
console.log(arr);
// use push and unshift to add the variables back to the array in numerical order, 0-6
