import { useState, useCallback } from 'react';

/**
 * A custom hook for managing a counter.
 * @param {number} initialValue - The initial value of the counter.
 * @returns {{count: number, increment: function, decrement: function}}
 */


function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((c) => c + 1), []);

  const decrement = useCallback(() => setCount((c) => c - 1), []);

  return { count, increment, decrement };
}

export default useCounter;



/* 
⁡⁢⁣⁣    # Custom 𝗛𝗼𝗼𝗸⁡
        * A custom hook is a JavaScript function that starts with "use" and allows you to reuse stateful logic across multiple components in React.
        * Custom hooks can call other hooks, including built-in hooks like useState and useEffect, as well as other custom hooks.
        * They help to keep your code DRY (Don't Repeat Yourself) by encapsulating common logic that can be shared among different components.
        - Custom hooks are a powerful way to abstract and share logic in a reusable manner, making your code more modular and easier to maintain. 
        
        
       • ⁡⁣⁢⁣File Extension: .js or .jsx?⁡
            - For custom hooks, you should use the .js file extension.

            Here's why:     
                - No JSX Returned: Custom hooks are JavaScript functions that use other hooks. They don't render or return any JSX (HTML-like syntax).

                - Clear Separation of Concerns: Using .js for logic (like custom hooks) and .jsx for components that render UI is a standard and clean practice in React projects. It makes your codebase easier to understand and maintain.

    ⁡⁣⁢⁣In summary:⁡
        Name: Always start with use.
        File Extension: Use .js because custom hooks don't return JSX.            
*/