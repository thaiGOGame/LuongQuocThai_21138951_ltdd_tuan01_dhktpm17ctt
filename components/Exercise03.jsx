import React from "react";

function Exercise03() {
    const number = [];
    for (let i = 1; i <= 10; i ++) {
        number.push(i*7);
    }
  return(
    <div>
         <h1>3. Print the multiplication table with 7 </h1>
         {number.join(', ')}  
    </div>
  )
}
export default Exercise03