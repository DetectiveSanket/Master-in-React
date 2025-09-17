import React, { useRef } from 'react'

function UseRefHook() {

    const inputRef = useRef();

    const focusInput = () => {
      inputRef.current.focus(); // directly focuses input
    };

    return (
        <>
            <h2>useRef Hook</h2>
            <div>
                <input ref={inputRef} type="text" placeholder="Type here..." />
                <button onClick={focusInput}>Focus Input</button>
            </div>
        </>
    )
}

export default UseRefHook;