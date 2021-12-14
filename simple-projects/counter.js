import React, { useState } from "react";
// import { useState } from "react"; 

// const person = [
//     {id: 1, name: "Gustavo"},
//     {id: 2, name: "Aline"},
//     {id: 3, name: "Lisa"},
//     {id:4, name: 'Who is this?'}
// ];

function Playground() {
const [value, setValue] = React.useState(0);

function resetCounter() {
    setValue(0);
}

const increaseCounter = ()=> {
    setValue((prevValue)=> prevValue + 1)
}

return (
    <>
        <h3>Counter</h3>
        <h1>{value}</h1>
        <button className="btn" onClick={()=> setValue(value - 1)}>Prev</button>
        <button className="btn" onClick={resetCounter}>Reset</button>
        <button className="btn" onClick={increaseCounter}>Next</button>
    </>
);
}

export default Playground;
