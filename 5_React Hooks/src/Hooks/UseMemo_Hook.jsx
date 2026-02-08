
import React, { useMemo, useState } from 'react'

function UseMemoHook() {

    const [count , setCount] = useState(0);

    function expensiveCalculation(num) {
        console.log("Calculating...");
        for(let i = 0 ; i < 1000000000 ; i++) ;
        return num * 2;
    }

    
    //const calculation = expensiveCalculation(5); //-> every time when state changes , this function will run again and again

    /* 
        ⁡⁣⁢⁣Problem with above approach:⁡
            - Every time the component re-renders (e.g., when the state changes {means when count value change} ), the expensiveCalculation function is called again, even if the input (5 in this case) hasn't changed.
            - This can lead to performance issues, especially if the calculation is complex or time-consuming.
    */

    //? Using useMemo Hook

    //useMemo(() => first, [second]) --> syntax: where first is function and second is dependency array
     
     const [input , setInput] = useState(0);
     const calculation = useMemo(() => expensiveCalculation(input), [input]);

    //-> this function will run only when count changes

    /* 
        ⁡⁣⁢⁣How useMemo works ?⁡
            - The useMemo hook takes two arguments: a function that performs the expensive calculation and an array of dependencies.
            - It will only recompute the memoized value when one of the dependencies has changed.
            - In this case, the expensiveCalculation function will only be called again if the count variable changes.
            - If count remains the same between renders, React will return the previously memoized value, avoiding the need to re-run the expensive calculation.   
            -- but only last input value will be stored or memoized.                                 
    */

            

    return (
        <div>
            <h2>useMemo Hook</h2>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <h3>Count : {count}</h3>

            <input 
                type="number" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                
            />

            <h3>Expensive Calculation : {calculation}</h3>
        </div>
    )
}

export default UseMemoHook;


/* 
    ⁡⁢⁣⁣# ⁡⁢⁣⁣𝘂𝘀𝗲𝗠𝗲𝗺𝗼 𝗛𝗼𝗼𝗸⁡
        * useMemo is a react hook that lets you cache(store) the result of a calculation between re-renders.
        * useMemo is a React Hook that memoizes the result of a function, recomputing it only when its dependencies change.
        - It helps optimize performance by avoiding expensive calculations on every render.

        • ⁡⁣⁢⁣What is Memoization OR Memo ?⁡ {memoization -> DSA dynamic programming concept}
            - Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again.
            - It is particularly useful in scenarios where a function is called multiple times with the same arguments, as it avoids redundant computations and improves performance.
            - In above example or scenarios , we can stored the repetitive calculation result in a variable and use that variable instead of calculating it again and again.

        •⁡⁣⁢⁣ Why useMemo is used ?⁡    
            - In React, useMemo is used to memoize the result of a function so that it is only recalculated when its dependencies change.
            - This is particularly useful for optimizing performance in scenarios where a function performs expensive calculations or operations that do not need to be re-executed on every render.
            - By using useMemo, you can avoid unnecessary recalculations and improve the ⁡⁣⁣⁢efficiency of your React components⁡.

            -- Its cache the value/result called memoized value.
            
   ⁡⁣⁢⁣ Key Use Cases:⁡
        - Performance Optimization: Memoizing expensive calculations to avoid unnecessary re-computations.
        - Referential Equality: Ensuring that objects or arrays maintain the same reference between renders unless their dependencies change.



    ⁡⁣⁢⁣Syntax:⁡
        useMemo(() => first, [second])
        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

        ⁡⁣⁢⁣• Reference :-⁡
            - useMemo(calculateValue, dependencies)
            - useMemo(() => first, [second])

            Call useMemo at the top level of your component to cache a calculation between re-renders:

            ⁡⁣⁣⁢Parameters⁡

                ⁡⁢⁢⁢calculateValue⁡: The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it so it can be reused later.

                ⁡⁢⁢⁢dependencies⁡: The list of all reactive values referenced inside of the calculateValue code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison.

*/