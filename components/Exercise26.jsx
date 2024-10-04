import React from "react";

function Exercise26() {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];

  const differenceArray = array1.filter(x => !array2.includes(x));

  return (
    <div>
      <h1>26. Elements in the first array but not in the second</h1>
      Array 1: {array1.join(', ')}
      Array 2: {array2.join(', ')}
     Difference: {differenceArray.join(', ')}
    </div>
  );
}

export default Exercise26;
