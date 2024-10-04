import React from "react";

function Exercise02() {
   
    const oddNumbers = [];
    for (let i = 1; i < 100; i += 2) {
        oddNumbers.push(i);
    }

    return (
    <div>
        <h1>2. Print the odd numbers less than 100  </h1>
                 {
                    oddNumbers.join(', ')
                 }
    </div>
    )
}
export default Exercise02