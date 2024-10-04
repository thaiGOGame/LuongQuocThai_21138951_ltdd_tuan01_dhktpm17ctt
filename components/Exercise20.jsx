import React from "react";

function Exercise20() {
  const array = [1, 2, 3, 4, 5];

  // Rotate array to the left by 1 position
  const rotatedArray = [...array.slice(1), array[0]];

  return (
    <div>
      <h1>20. Rotate an array to the left 1 position</h1>
      Original Array: {array.join(', ')}
      Rotated Array: {rotatedArray.join(', ')}
    </div>
  );
}

export default Exercise20;
