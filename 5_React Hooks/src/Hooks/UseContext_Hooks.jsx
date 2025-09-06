import React, { useState } from 'react'
import { createContext } from 'react';
import ChildA from '../Pages/childA';


//*step 1: create context
const UserContext = createContext();
// export const UserContext = createContext();

function UseContextHooks() {

    const [user , ] = useState({name:"sanket"})

    return (
        <>  
        <hr />
            <h2>UseContext Hooks</h2>

            {/*//* step 2: Provider (wrap all the child inside the provider) */}
            {/*//* step 3: Pass the value */}

            <UserContext.Provider value={user}> 
                <ChildA />

                {/* 
                    ChildA -> ChildB -> ChildC
                    so we can easily pass data from ChildA to ChildC without prop drilling
                */}
            </UserContext.Provider>
        </>
    )
}

export default UseContextHooks;
export { UserContext };


/* 
    ⁡⁢⁣⁣# 𝘂𝘀𝗲𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝗛𝗼𝗼𝗸⁡
        - React Context is a way to manage state globally.
        - It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

        • The Problem
            - State should be held by the highest parent component in the stack that requires access to the state.
            - To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
            - To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

        • Basic syntax:
            const value = useContext(MyContext);
            - This retrieves the current value of MyContext.

        • When to use:
            - When you need to access context values in deeply nested components.
            - When you want to avoid prop drilling (passing props through many layers).

        • Example:
            const App = () => {
                return (
                    <MyContext.Provider value={ some value }>
                        <Child />
                    </MyContext.Provider>
                );
            };

            const Child = () => {
                const value = useContext(MyContext);
                return <div>{value}</div>;
            };

        • Steps:
            1) Create context
            2) Provider (wrap all the child inside the provider)
            3) Pass the value
            4) consumer (consumer <child that want to received the value> ke andar jaake consume kro)

*/