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
        * Basically , it is used to share data between components without passing props down manually at every level.
        - The useContext Hook allows you to access the context value directly in functional components.
        - It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
        * This Hook solve the problem of prop drilling.

        ? useContext is just one part of the ⁡⁣⁣⁢𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝗔𝗣𝗜⁡ — specifically, it’s a hook to read the value from a context.
        ? You still need to use createContext() + Provider to set up the context first.

        ⁡⁣⁢⁣• The Problem⁡
            - State should be held by the highest parent component in the stack that requires access to the state.
            - To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
            - To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

        ## ⁡⁣⁣⁢⁡⁣⁣⁢𝗪𝗵𝗮𝘁 𝗶𝘀 𝗣𝗿𝗼𝗽𝘀 𝗗𝗿𝗶𝗹𝗹𝗶𝗻𝗴?⁡
            - Props drilling is the process of passing data from a parent component to deeply nested child components through multiple layers of intermediate components.
            - This can lead to code that is hard to maintain and understand, especially when many components in the hierarchy do not need the data.
            - To slove this problem, we can use Context API to provide the data at a higher level and consume it directly in the components that need it.
                >< Solution of props driling
                    - Context API
                    - useContext Hook
                    - State Management Libraries (like Redux, MobX)    

        ⁡⁣⁢⁣• Basic syntax:⁡
            ⁡⁢⁢⁢const value = useContext(MyContext);⁡
            - This retrieves the current value of MyContext.

        ⁡⁣⁢⁣• When to use:⁡
            - When you need to access context values in deeply nested components.
            - When you want to avoid prop drilling (passing props through many layers).

        ⁡⁣⁢⁣• Example:⁡
            ⁡⁢⁢⁢const App = () => {
                return (
                    <MyContext.Provider value={ some value }>
                        <Child />
                    </MyContext.Provider>
                );
            };

            const Child = () => {
                const value = useContext(MyContext);
                return <div>{value}</div>;
            };⁡

        ⁡⁣⁢⁣• Steps:⁡
            1) Create context
            2) Provider (wrap all the child inside the provider)
            3) Pass the value
            4) consumer (consumer <child that want to received the value> ke andar jaake consume kro)

*/