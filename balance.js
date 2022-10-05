// Balance a list of opening and closing brackets.  Output whether the string is corrupt, complete or incomplete.
// Bonus: If a string is incomplete, show what brackets need to be added in order to make it correct.

const lines = [
  '[({(<(())[]>[[{[]{<()<>>',         // Incomplete - Complete by adding }}]])})]
  '[(()[<>])]({[<{<<[]>>(',           // Incomplete - Complete by adding )}>]})
  '{([(<{}[<>[]}>{[]{[(<()>',         // Corrupted: Expected ], but found } instead
  '(((({<>}<{<{<>}{[]{[]{}',          // Incomplete - Complete by adding }}>}>))))
  '[[<[([]))<([[{}[[()]]]',           // Corrupted: Expected ], but found ) instead
  '((<>){[]})' ,                      // Correct
  '[{[{({}]{}}([{[{{{}}([]',          // Corrupted: Expected ), but found ] instead
  '{<[[]]>}<{[{[{[]{()[[[]',          // Incomplete - Complete by adding ]]}}]}]}>
  '[<(<(<(<{}))><([]([]()',           // Corrupted: Expected >, but found ) instead
  '<{([([[(<>()){}]>(<<{{',           // Corrupted: Expected ], but found > instead
  '{<()[]>}',                         // Correct
  '<{([{{}}[<[[[<>{}]]]>[]]'          // Incomplete - Complete by adding ])}>
]

// Function to scan through lines one at a time
function processLine(line, index) {

  // Empty arrays to hold characters as they are checked
  let openers = [];
  let closers = [];
  
  // Record of possible characters to look for
  let leftPossible  = ["[", "(", "{", "<"];
  let rightPossible = ["]", ")", "}", ">"];


  // Loop through each character in the line
  for (let lineLoopi = 0; lineLoopi < line.length; lineLoopi++) {

    // Current character being examined
    let current = line[lineLoopi];

    // Assign opening brackets to openers array
    if (leftPossible.includes(current)) {
      openers.push(current);
    }

    // Assign closing brackets to closers array
    if (rightPossible.includes(current)) {
      closers.push(current);

      // Last element in both arrays for comparison
      let lastOpener = openers[openers.length - 1]; 
      let lastCloser = closers[closers.length - 1];

      // Last element index position in comparision arrays
      let lastOpenerIndex = leftPossible.indexOf(lastOpener);
      let lastCloserIndex = rightPossible.indexOf(lastCloser);

      // Compare brackets to see if they close each other, if so then remove the closed pairs from both arrays
        if (lastOpenerIndex == lastCloserIndex) {
        openers.pop();
        closers.pop();
      }

      // If more than one closer is in the array then the line is corrupt and the loop should end
      if (closers.length == 1) {
        lineLoopi = line.length
      }

    }

  }

  // Array to hold needed closers in the case of an incomplete string
  let reversedOpeners = [];

  // Parse openers left after an incomplete string and reverse the order
  for (let reverseLoopi = 0; reverseLoopi < openers.length; reverseLoopi++) {
      let charPosition = leftPossible.indexOf(openers[reverseLoopi]);
      let newPosition = rightPossible[charPosition];
      reversedOpeners[reverseLoopi] = newPosition;
  }

  // Print line status and correction, if needed
  if (closers.length === 0 && openers.length === 0 ) {
    console.log (`Line ${index+1}: "${line}", is correct.`) // Everything was closed correctly
  } else if (closers.length !== 0) {
    console.log(`Line ${index+1}: "${line}", is corrupted: Expected ${reversedOpeners[reversedOpeners.length -1]} but found ${closers[closers.length-1]} instead.`); // There were incorrect closing brackets (Brackets left over in closers[])
  } else  if (closers.length === 0) {
    console.log (`Line ${index+1}: "${line}", is incomplete but can be fixed by adding "${reversedOpeners.reverse().join("")}" to the end.`) // Closing brackets needed to complete line
  }

}

// Grammer check for multiple lines
if (lines.length == 1) {
  console.log(`\nThere is ${lines.length} line total.\n`);
} else {
  console.log(`\nThere are ${lines.length} lines total.\n`);
}

// Execute function to start scanning lines
lines.forEach(processLine);
