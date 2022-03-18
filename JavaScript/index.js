// Write down your inputs in an array to test the function
let testCases = [6, 24, 125, 720, 1024, 40320];

// Create a recursive function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not an exact bound!"
// Finde exact upper bound
function isFactorial(n) {
  let start = n;
  for (var i = 1; ; i++) {
    if (n % i == 0) {
      n = parseInt(n / i);
    } else {
      break;
    }
  }

  if (n == 1) {
    return [start, i-1];
  } else {
    return "Not an exact bound!";
  }
}

// Tests the input against the function
testCases.forEach(function (testCase) {
  console.log(isFactorial(testCase));
});
