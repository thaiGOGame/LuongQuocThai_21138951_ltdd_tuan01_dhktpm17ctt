import React from "react";

function Exercise22() {
  const array = [1, 2, 3, 4, 5];

  const reversedArray = array.slice().reverse();

  return (
    <div>
      <h1>22. Reverse an array</h1>
      Original Array: {array.join(', ')}
      Reversed Array: {reversedArray.join(', ')}
    </div>
  );
}

export default Exercise22;
