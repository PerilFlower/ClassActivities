// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(param1 = 10, param2 = 20) {
  console.log(param1);
  console.log(param2);
  return param1 + param2;
}
// invoke the function and pass in two numbers
functionWithTwoParams(4, 5);
// invoke the function and pass in more than two numbers
functionWithTwoParams(2, 5, 4, 3, 6);
// invoke the function and pass in only one number
functionWithTwoParams(4);
// change the function to set default values for the parameters
// again, invoke the function and pass in only one number
functionWithTwoParams(4);
// Rest Operator
// add a rest operator to the function's parameters
function functionWithRestParam(param1, param2 = 20, ...restParam) {
  console.log(param1);
  console.log(param2);
  console.log(restParam);
  return param1 + param2;
}
// add a line to the function's body to print the value of the rest operator
// again, invoke the function and pass in more than two numbers
console.log("below is function with rest param");
console.log(functionWithRestParam(3,4,5,78);
console.log(restParamReturn);
