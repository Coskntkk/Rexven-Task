// Write down your inputs in an array to test the function
let testCases = [6, 24, 125, 720, 1024, 40320];

// Create a recursive function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not an exact bound!"
// Finde exact upper bound recursive
function isFactorial(num, i = 1, start = num) {
  num = num / i;
  if (num == 1) {
    return [start, i];
  }
  if (num < 1) {
    return "Not an exact bound!";
  }
  i++;
  return isFactorial(num, i, start);
}

// Tests the input against the function
testCases.forEach(function (testCase) {
  console.log(isFactorial(testCase));
});
