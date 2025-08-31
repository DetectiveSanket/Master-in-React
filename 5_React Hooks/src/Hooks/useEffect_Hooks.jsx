import React from 'react'

function useEffect_Hooks() {

    return (
        <>
            <h4>useEffect Hook</h4>
        </>
    )
}

export default useEffect_Hooks;

/*  
    # 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝗛𝗼𝗼𝗸
        • useEffect is used to perform side effects in React components.
        • It can be used for data fetching, subscriptions, or manually changing the DOM.

        * Side effects = anything outside rendering: fetching data, subscriptions, DOM manipulation, timers.

        • It replaces lifecycle methods in class components:
            - componentDidMount → run once after render.
            - componentDidUpdate → run on updates.
            - componentWillUnmount → cleanup.

*/