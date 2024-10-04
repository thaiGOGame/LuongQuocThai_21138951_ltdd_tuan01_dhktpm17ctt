import React from "react";

function Exercise01() {
   
    const numbers = [0,1,2,3,4,5,6,7,8,9,10]
    return (
    <div>
        <h1>1. Print numbers from 1 to 10 </h1>
                 {numbers.map((number) => (
                    <div key={number}>{number}</div>
                ))}
    </div>
    )
}
export default Exercise01