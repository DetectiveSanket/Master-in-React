import React, { useRef } from 'react'

function UseCaseB() {

    const refBtn = useRef();
    
    function handleClick(){
        refBtn.current.style.backgroundColor = "lightgreen";
        refBtn.current.style.color = "black";
        refBtn.current.style.fontWeight = "bold";
        refBtn.current.innerText = "Clicked!";
    }

    function handleMouseOut(){
        refBtn.current.style.backgroundColor = "black";
        refBtn.current.style.color = "white";
        refBtn.current.style.fontWeight = "normal";
        refBtn.current.innerText = "Color";
    }
    return (
        <div>
            <h2>UseCaseB: Accessing and manipulating DOM elements directly</h2>

            <button ref={refBtn}>Color</button>

            <button onClick={handleClick}>Color change</button>
            <button onClick={handleMouseOut}> Color change</button>
            
            <p style={{ color: "yellow", border: "1px solid white" }}>Here we access the Dom element</p>
        </div>
    )
}

export default UseCaseB