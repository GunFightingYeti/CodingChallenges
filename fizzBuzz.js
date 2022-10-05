// FizzBuzz
// Loop through array and output "Fizz" if the current number is divisible by 3, "Buzz" if divisible by 5, otherwise output the number.

const which = process.argv.slice(2);
let loopEnd = 15;

  // If statements
function fizzBuzz1() {

  console.log(`\nRunning fizzBuzz using If Statements\n`);

  for (let i = 1; i <= loopEnd; i++) {

    let output = "";

    if (i % 3 == 0) {output += "Fizz"}
    if (i % 5 == 0) {output += "Buzz"}
    if (output == "") {output = i};
    console.log(output);
  }

}

// Ternary operators
function fizzBuzz2() {

  console.log(`\nRunning fizzBuzz using Ternary Operators\n`);

  for (let i = 1; i <= loopEnd; i++) {
    console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
  }

}

// Switch Case
function fizzBuzz3() {

  console.log(`\nRunning fizzBuzz using Switch Case\n`);

  for(var i = 1; i < loopEnd; i++) {

    switch(true) {
        case( i % 5 === 0 && i % 3 === 0): console.log("FizzBuzz");
            break;
        case(i % 5 === 0): console.log("Buzz");
            break;
        case (i % 3 === 0): console.log("Fizz");
            break;
        default: console.log( i );
    }

  }

}

function fizzBuzz(arg) {

  switch(true) {
    case(arg == 1): fizzBuzz1();
        break;
    case(arg == 2): fizzBuzz2();
        break;
    case (arg == 3):  fizzBuzz3();
        break;
    default: console.log(`There has been an error with the arguments`);
  }

}

fizzBuzz(which);
