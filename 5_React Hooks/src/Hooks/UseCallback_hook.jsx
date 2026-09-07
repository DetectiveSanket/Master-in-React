import React, { useCallback } from 'react'
import CallbackHookchild from '../Pages/CallbackHook_child';

function UseCallbackhook() {

    const [count , setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const increment1 = useCallback( () => {
        setCount(count + 1);
    },[count])  //* here we are wrapping the function inside useCallback hook. so its help to return the memoized version of the callback function that only changes if one of the dependencies has changed.

    /* 
        ⁡⁣⁢⁣How useCallback works ?⁡
            - The useCallback hook takes two arguments: a function that you want to memoize and an array of dependencies.
            - It will return a memoized version of the function that only changes if one of the dependencies has changed.
            - In this case, the increment function will only be recreated if the count variable changes.
            - If count remains the same between renders, React will return the previously memoized function, preventing unnecessary re-renders of child components that rely on that function.
    */
       

    return (
        <div>
            <h1>useCallback Hook</h1>

            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment Count</button>

            {/* 
                <CallbackHookchild name="sanket" /> //* every time when parent component re-render , the child component also re-render. to avoid this we use React.memo 
            */}

            {/* 
                - ⁡⁢⁣⁣𝗜𝗳 𝘆𝗼𝘂𝗿 𝗮𝗿𝗲 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗮𝘀 𝗮 𝗽𝗿𝗼𝗽 , 𝘁𝗵𝗲𝗻 𝗿𝗲𝗮𝗰𝘁.𝗺𝗲𝗺𝗼 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗯𝗹𝗲 𝘁𝗼 𝘀𝗮𝘃𝗲 𝘆𝗼𝘂 𝗳𝗿𝗼𝗺 𝗿𝗲-𝗿𝗲𝗻𝗱𝗲𝗿𝗶𝗻𝗴 𝗼𝗳 𝗰𝗵𝗶𝗹𝗱 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁.⁡

                //* So to solve this problem we have to use 𝘂𝘀𝗲𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗵𝗼𝗼𝗸.
            */}

            <CallbackHookchild 
               name="sanket"
               onClick={increment1}  //* here we are passing function as a prop to the child component. so to avoid the unnecessary re-rendering of the child component we have to wrap this function inside useCallback hook.
            /> 
        </div>
    )
}

export default UseCallbackhook;

/* 
⁡⁢⁣⁣    # 𝘂𝘀𝗲𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗛𝗼𝗼𝗸⁡

        * Its is used to avoid the unnecessary re-rendering of the child component.
        - when a parent component re-renders, all of its child components also re-render by default.
        * It Memoizes/chache a function reference
        - useCallback is a React hook that returns a memoized version of a callback function.
        - It is used to optimize performance by preventing unnecessary re-creations of functions on every render.
        - This is particularly useful when passing functions as props to child components, as it helps avoid unnecessary re-renders of those components.

       • ⁡⁣⁢⁣𝗧𝗵𝗲 𝗺𝗮𝗶𝗻 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗶𝘀 𝘄𝗵𝗮𝘁 𝘁𝗵𝗲𝘆 𝗮𝗰𝘁𝘂𝗮𝗹𝗹𝘆 𝗰𝗮𝗰𝗵𝗲 (𝗺𝗲𝗺𝗼𝗶𝘇𝗲):⁡

            - useCallback caches a function definition between renders.
            - React.memo caches a rendered component output between renders.

        • ⁡⁣⁢⁣Problem statement:-⁡
            ^ In React, when a parent component re-renders, all of its child components also re-render by default.
            - This can lead to performance issues, especially if the child components are complex or if the parent component re-renders frequently.
            - Even if the props passed to the child components haven't changed, they will still re-render because they receive new references to the functions defined in the parent component.
                ex:-
                    ⁡⁢⁢⁢import React from 'react'
                    import CallbackHookchild from '../Pages/CallbackHook_child';

                    function UseCallbackhook() {

                        const [count , setCount] = React.useState(0);

                        const increment = () => {
                            setCount(count + 1);
                        }

                        return (
                            <div>
                                <h1>useCallback Hook</h1>

                                <h2>Count : {count}</h2>
                                <button onClick={increment}>Increment Count</button>

                                <CallbackHookchild name="sanket"/>
                            </div>
                        )
                    }

                    export default UseCallbackhook;⁡

        ## ⁡⁣⁢⁣𝘂𝘀𝗲𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 + 𝗥𝗲𝗮𝗰𝘁.𝗺𝗲𝗺𝗼 𝗧𝗼𝗴𝗲𝘁𝗵𝗲𝗿 🤝 — 𝗖𝗹𝗲𝗮𝗿 𝗚𝘂𝗶𝗱𝗲🎯 ⁡

            ^ First — Who Lives Where?
                ? Parent Component  →  useCallback lives HERE
                ? Child Component   →  React.memo wraps HERE

            ^ Simple rule:
                ? React.memo → wraps the Child component
                ? useCallback → lives in the Parent component

        🧠 ⁡⁣⁢⁣𝗪𝗵𝘆 𝗗𝗼 𝗧𝗵𝗲𝘆 𝗡𝗲𝗲𝗱 𝗘𝗮𝗰𝗵 𝗢𝘁𝗵𝗲𝗿?⁡
            ^ React.memo alone — not enough!
            ^ useCallback alone — not enough either!
            & Together — The Perfect Combo!
            
        - React.memo is a ⁡⁣⁣⁢higher-order component t⁡hat memoizes the rendered output of a component, preventing unnecessary re-renders when the props haven't changed. However, if you pass a function as a prop to a child component, React.memo won't prevent re-renders because the function reference changes on every render.

       🧠 𝗢𝗻𝗲-𝗟𝗶𝗻𝗲 𝗦𝘂𝗺𝗺𝗮𝗿𝘆
            --------------------------------------------------------
            | Hook What      | It Memoizes    |   Returns          |
            | ---------------|----------------|--------------------|  
            | useCallback    | function       |   Cached function  |
            | useMemo        | value/result   |   Cached value     |
            --------------------------------------------------------
            > ⁡⁣⁣⁢Both are performance optimization hooks — they skip re-computation on every render.⁡

        ⁡⁣⁢⁣• Basic syntax:⁡
            - we need to wrap the ⁡⁣⁣⁢child component function⁡ inside useCallback hook.
            - So its help to return the memoized version of the callback function that only changes if one of the dependencies has changed.meaning that if the dependencies OR Props remain the same, the function reference will also remain the same, preventing unnecessary re-renders of child components that rely on that function.

            const memoizedCallback = ⁡⁣⁣⁢React.memo⁡(
                () => {
                    doSomething(a, b);
                    return(
                        <div>...</div>
                    )
                };
            );
            - This returns a memoized version of the callback that only changes if one of the dependencies has changed.
            * But the here we are using React.memo 𝗻𝗼𝘁 ⁡⁣⁣⁢𝗰𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗵𝗼𝗼𝗸.⁡

            • ⁡⁣⁢⁣Limitation of memo:⁡
                - if we pass function as a prop to the child component then also child component re-render.
                - so problem is useMemo is not able to handle function props.
                - so to solve this problem we have to use ⁡⁣⁣⁢useCallback hook.⁡
        ⁡⁣⁢⁣• When to use:⁡
            - When you have a function that is passed as a prop to a child component and you want to prevent unnecessary re-renders of that child component.
            - When the function is defined inside the parent component and would otherwise be recreated on every render. 


        * React.memo -> wrap -> component re-render tabhi hoga jab props change hoga. nahi to re-render nahi hoga.    
        * If your are sending function as a prop , then react.memo is not able to save you from re-rendering of child component.
        * So to solve this problem we have to use ⁡⁣⁣⁢⁡⁣⁣⁢𝙪͟𝙨͟𝙚͟𝘾͟𝙖͟𝙡͟𝙡͟𝙗͟𝙖͟𝙘͟𝙠 𝙝͟𝙤͟𝙤͟𝙠⁡⁡. 
        > ⁡⁢⁣⁣So in this case we have to use both React.memo and useCallback hook together to prevent unnecessary re-renders of child components that rely on functions passed as props.⁡
        
        ⁡⁣⁢⁣• solution:⁡
            - we have to wrap the ⁡⁣⁣⁢function⁡ inside useCallback hook.    
            - function that we are passing as a prop to the child component.
            - So its help to return the memoized version of the callback function that only changes if one of the dependencies has changed.
                ex:-
                    
        ⁡⁣⁢⁣• syntax of useCallback hook:⁡
            useCallback(
                () => {
                    first
                },
                [second],
            )
            - where first is function and second is dependency array.
            - It will return a memoized version of the function that only changes if one of the dependencies has changed.
            - In this case, the increment function will only be recreated if the count variable changes.
            - If count remains the same between renders, React will return the previously memoized function, preventing unnecessary re-renders of child components that rely on that function.

*/