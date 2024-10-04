import React from "react";

function Exercise25() {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];

  const uniqueArray = [...array1.filter(x => !array2.includes(x)), ...array2.filter(x => !array1.includes(x))];

  return (
    <div>
      <h1>25. Elements in either array but not in both</h1>
      Array 1: {array1.join(', ')}
     Array 2: {array2.join(', ')}
      Unique Elements: {uniqueArray.join(', ')}
    </div>
  );
}

export default Exercise25;
