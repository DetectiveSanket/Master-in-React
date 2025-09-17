import React, { useEffect, useRef, useState } from 'react'

function UseCaseA() {

    //Problem 
    let x = 1;
    const [count , setCount] = useState(0);
    

    /* 
        here, when we click on the button, both x and count values are incremented by 1.
        but the problem is, when the component re-renders due to state change (count),
        the value of x is reset to 1, because x is just a normal variable and it doesn't persist across renders.
        so, we cannot use normal variable to persist value across renders.
    */

    // Solution: useRef Hook
    // import useRef from react and use it to create a ref variable
     const xRef = useRef(1); // initial value is 1    


     function handleClick(){
        x = x + 1;
        setCount(count + 1);
        console.log("x:", x);
        console.log("count:", count);
        xRef.current = xRef.current + 1; // update the ref variable
        console.log("xRef.current:", xRef.current);
    } 

    useEffect(() => {
        console.log("Main bhir se render hua");
    })

    return (
        <div>
            <h2>UseCaseA: Persist the value of variable across renders without causing re-renders</h2>

            <p style={{color: "blue"}}>Value of x: {x} </p>
            <p style={{color: "green"}}>Value of count: {count} </p>
            <p style={{color: "orange"}}>Value of xRef.current: {xRef.current} </p>

            <p style={{ color: "yellow", border: "1px solid white" }}>Note: Here, xRef is a ref variable created using useRef hook. It persists the value across renders without causing re-renders.</p>

            <button onClick={handleClick}>
                click me
            </button>
        </div>
    )
}

export default UseCaseA;

/* 
    1) when your state variable changes , the component re-renders.
    2) but when your ref variable changes, the component does not re-render.
    3) so, use ref variable when you want to persist the value across renders without causing re-renders.
    4) use state variable when you want to re-render the component on value change.
*/