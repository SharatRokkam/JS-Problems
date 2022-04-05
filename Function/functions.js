// -----------------------Problems for Class------------------------

// Create one function with zero parameter having a console statement;
function one(){
    console.log("hey!");
}

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function add(x, y) {
  console.log(x + y);
}

add(3, 4);

// Output: 7

//Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old"
function about(fname, lname, age){
    return fname + lname + " is " + age + " years old."
}
about("A", "Z", 99);

// Output : AZ is 99 years old.


// Create one arrow function 
const wish = () => console.log("Have a good day");

wish();
// Output : Have a good day



// --------------------Problems for Handson----------------------

//"Print output:
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Output: undefined

// "Print output:
var x = 21;
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

girl ();

// Output : 21 undefined

// Print output
var x = 21;
a();
b();
console.log(a);

function a() {
  var x = 20;
  console.log(x);
}

function b() {
  var x = 40;
  console.log(x);
}

// Output : 20 40 and function a() will be printed on the screen

// Print output
var x = 21;
a();
b();
console.log(a);

 a = function () {
  x = 20;
  console.log(x);
};

 b = function () {
  x = 40;
  console.log(x);
};

// Output : TypeError: a and b are not function

// Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
answer = factorial(4);
console.log(answer);

// Output : 24
