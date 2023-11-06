// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle","ochre", "aquamarine","saffron"];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffColors", () => {
    // "shuffColors" is the string argument for the describe function
  it("takes in an array, removes the first item from the array and shuffles the remaining items.", () => {
    // it takes in an array, removes the first item from the array and shuffles the remaining item
      expect(shuffColors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(shuffColors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
      // expecting the colors to be shuffled without the first item in the original array. expect.arrayContaining is used to check if certain elements are there without any strict order

  })
}) // FAIL: ReferenceError: shuffColors is not defined

// b) Create the function that makes the test pass.

const shuffColors = (array) => {
  // shuffColors function uses array as a parameter
  const firstColor = array.slice(1);
  // firstColor is the arrays with the first original element removed
   for(let i = firstColor.length - 1; i > 0; i--) {
    // used the Fisher-Yates algorithm which iterates starting from the last element
       const randColor = Math.floor(Math.random() * (i + 1));
       // randColor randoms the elements using Math.random and Math.floor rounds the random number down to the neartest integer
       [firstColor[i], firstColor[randColor]] = [firstColor[randColor], firstColor[i]]
      // The destructing assignment is used to swap the indexes and randomize the indexes using the Fisher-Yates method
      }
      return firstColor
} // PASS: shuffColors ✓ takes in an array, removes the first item from the array and shuffles the remaining items.

// Pseudo code: I couldn't figure out another way of shuffling the colors without researching the Fisher-Yates method for shuffling an array in reverse. I tried other ways but either it wasn't shuffling or I got an error.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 };
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 };
// Expected output: -31

describe("totalVotes", () => {
  // totalVotes is the string argument for the function
  it("takes in an object that contains up votes and down votes and returns the end tally",
  // returns the ending tally of up and down votes
  () => {
    expect(totalVotes(votes1)).toEqual(11);
    expect(totalVotes(votes2)).toEqual(-31);
    // two expect statements for votes1 and votes2
  })
}) // FAIL: ReferenceError: totalVotes is not defined

// b) Create the function that makes the test pass.

const totalVotes = (votes) => {
  // variable totalVotes with votes parameter
  return votes.upVotes - votes.downVotes;
  // return upVotes - downVotes
} // PASS: totalVotes ✓ takes in an object that contains up votes and down votes and returns the end tally


// Pseudo code:
