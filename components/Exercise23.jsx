import React from "react";

function Exercise23() {
  const str = "hello";

  const reversedString = str.split('').reverse().join('');

  return (
    <div>
      <h1>23. Reverse a string</h1>
      Original String: {str}
     Reversed String: {reversedString}
    </div>
  );
}

export default Exercise23;
