// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:

// nestedFunction can access the variable internal because they are inside the same SCOPE and internal is declared within function scope; nested functions automatically assume block or function scope.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  return counter;
}

console.log("the answer to closure: task 2", sumation(4));
console.log("the answer to closure: task 2", sumation(4));
console.log("the answer to closure: task 2", sumation(4));
