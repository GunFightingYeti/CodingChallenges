// This problem was recently asked by Google. (Easy)

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

// Global Variables
let target = 17;
let numArray = [10, 15, 3, 7, 2, 14];
let memory = [];


// Function to check array of numbers against target number
function checkTargetNumber(target, numArray) {

  // Slow moving loop to move through the first number
  for (outerLoopi = 0; outerLoopi < numArray.length; outerLoopi++) {

     let firstNumber = numArray[outerLoopi];
    memory.push(firstNumber);
  
    // Fast moving loop to move through the second number
    for (innerLoopi = 0; innerLoopi < numArray.length; innerLoopi++) {

      let secondNumber = numArray[innerLoopi];

      if (firstNumber + secondNumber == target && !memory.includes(secondNumber)) {
        console.log(`Match found! ${firstNumber} and ${secondNumber} add up to ${target}.`);
      }
    
    }
    
  }

}

// Execute function to check target number against array
checkTargetNumber(target, numArray);

