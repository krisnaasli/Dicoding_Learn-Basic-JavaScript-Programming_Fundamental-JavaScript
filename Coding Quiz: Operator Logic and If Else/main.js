/**
 * Create if logic to evaluate the score value with the following conditions:
 * 1. If the score is 90 or more
 * - Fill the result variable with the value: 'Congratulations! You got an A.'
 * 2. If the score is 80 to 89
 * - Fill the result variable with the value: 'You got a B.'
 * 3. If the score is 70 to 79
 * - Fill the result variable with the value: 'You got a C.'
 * 4. If the score is 60 to 69:
 * - Fill the result variable with the value: 'You got a D.'
 * 5. If the score is below 60:
 * - Fill the result variable with the value: 'You got the value E.'
 *
 *
 * Note: - Please do not delete pre-existing codes.
 * - You don't need to create result and score variables manually.
 * Use the variables provided.
 *
 */


function scoreChecker(score) {
    let result;
  
  
    // TODO
  if (score >=90){result = 'Congratulations! You got an A.';}
    else if (score >= 80 && score <= 89){result = 'You got a B.';}
    else if (score >= 70 && score <= 79){result = 'You got a C.';}
    else if (score >= 60 && score <= 69){result = 'You got a D.';}
    else{result = 'You got an E.';}
  
  
    console.log("Result:", result); // Add console.log() to display the result
  
  
    // Do not delete this code
    return result;
  }
  
// Test code
console.log(scoreChecker(95)); // Expected output: Congratulations! You got an A.
console.log(scoreChecker(85)); // Expected output: You got a B.
console.log(scoreChecker(75)); // Expected output: You got a C.
console.log(scoreChecker(65)); // Expected output: You got a D.
console.log(scoreChecker(55)); // Expected output: You got an E.

  
  /**
   * Do not delete the code below
   */
  module.exports = scoreChecker;