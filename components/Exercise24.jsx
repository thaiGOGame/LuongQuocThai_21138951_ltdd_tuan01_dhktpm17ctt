import React from "react";

function Exercise24() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const mergedArray = [...array1, ...array2];

  return (
    <div>
      <h1>24. Merge two arrays</h1>
      Array 1: {array1.join(', ')}
      Array 2: {array2.join(', ')}
      Merged Array: {mergedArray.join(', ')}
    </div>
  );
}

export default Exercise24;
