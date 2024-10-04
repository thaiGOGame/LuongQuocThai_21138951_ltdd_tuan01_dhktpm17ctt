import React from "react";

function Exercise21() {
  const array = [1, 2, 3, 4, 5];

  const rotatedArray = [array[array.length - 1], ...array.slice(0, array.length - 1)];

  return (
    <div>
      <h1>21. Rotate an array to the right 1 position</h1>
      Original Array: {array.join(', ')}
      Rotated Array: {rotatedArray.join(', ')}
    </div>
  );
}

export default Exercise21;
