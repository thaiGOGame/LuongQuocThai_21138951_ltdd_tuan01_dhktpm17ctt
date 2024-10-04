import React from "react";

function Exercise12() {
  // Define an array of numbers
  const numbers = [-12, 3, -4, 5, 6, -9, 0];

  // Function to filter positive numbers
  const filterPositiveNumbers = (numbers) => {
    return numbers.filter(number => number > 0);
  };

  // Get the filtered array of positive numbers
  const positiveNumbers = filterPositiveNumbers(numbers);

  return (
    <div>
      <h1>12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers</h1>
     Original Array: {numbers.join(', ')}
      Positive Numbers: {positiveNumbers.join(', ')}
    </div>
  );
}

export default Exercise12;
