import React, { useRef, useState } from 'react'

function Timer() {

    const [time , setTime] = useState(0);
    let refTime = useRef(null);

    function handleStart(){
        refTime.current = setInterval(() => {
            setTime(time => time + 1)
        },1000);
    }

    function handleStop(){
        clearInterval(refTime.current);
        refTime.current = null;
    }

    function handleReset(){
        handleStop();
        setTime(0);
    }

    return (
        <div>
            <h2>Timer Example</h2>

            <div>Time: {time} sec</div>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}

export default Timer