
import { createContext } from 'react'; //* step 1: import createContext from react
import './App.css'
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';

const UseContext = createContext(); // * step 2: create context
// export const UseContext = createContext();

function App() {

    const user = {
            name: "John Doe",
            email: "abc@gamil.com",
            age: 25,
            city: "New York",
            country: "USA"
        };

    return (
        <>
            <h1>Context API</h1>
            <p>
                |__11.
                |── Context API
                | ├── React.createContext   
                | ├── Context.Provider      
                | ├── Context.Consumer      
                | ├── useContext Hook       
                | └── Context Best Practices 
            </p>

            <hr />

            <UseContext.Provider value={user}> {/* //* step 3: Provider (wrap all the child inside the provider) */}
                <h2>App Component</h2>
                <ChildA />
                {/* <ChildB /> */}
            </UseContext.Provider>
        </>
    )
}

export default App;
export { UseContext };

/* 
    ⁡⁢⁣⁣# 𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝗔𝗣𝗜⁡
        * Context API is React’s built-in way to share data globally across components without prop drilling.
        - It allows you to create a context object that can be accessed by any component within its provider.
        - Context is useful for managing global state, themes, user authentication, and other data that needs to be accessible throughout the app.
        * Think of it as a “data pipeline” that passes data from a parent to deeply nested children without manually passing props at every level.

        ## ⁡⁣⁣⁢𝗪𝗵𝗮𝘁 𝗶𝘀 𝗣𝗿𝗼𝗽𝘀 𝗗𝗿𝗶𝗹𝗹𝗶𝗻𝗴?⁡
            * Props drilling is the process of passing data from a parent component to deeply nested child components through multiple layers of intermediate components.
            * This can lead to code that is hard to maintain and understand, especially when many components in the hierarchy do not need the data.
            - To slove this problem, we can use Context API to provide the data at a higher level and consume it directly in the components that need it.
                >< ⁡⁣⁢⁣Solution of props driling⁡
                    - Context API
                    - useContext Hook
                    - State Management Libraries (like Redux, MobX)

        - ⁡⁣⁣⁢Key components of Context API:⁡
            1. React.createContext: Creates a context object with a default value.
            2. Context.Provider: A component that provides the context value to its children. (to provide the data.)
            3. Context.Consumer: A component that consumes the context value (less commonly used with hooks).
            4. useContext Hook: A hook that allows functional components to access the context value directly.
        * So Context API = the full system for creating, providing, and consuming shared state.

    ⁡⁢⁣⁣• 𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝗕𝗲𝘀𝘁 𝗣𝗿𝗮𝗰𝘁𝗶𝗰𝗲𝘀⁡:-
        - Use context for global data that needs to be accessed by many components.
        - Avoid overusing context for local state that can be managed with props or component state.
        - Split context into multiple contexts for different concerns (e.g., theme, auth) to avoid unnecessary re-renders.
        - Memoize context values to prevent unnecessary re-renders of consuming components.
        - Keep context providers close to where they are needed in the component tree.

    • ⁡⁣⁢⁣useContext Hook⁡
        - The useContext Hook allows you to access the context value directly in functional components.
        - useContext is just one part of the Context API — specifically, it’s a hook to read the value from a context.
        - You still need to use createContext() + Provider to set up the context first.    
        * useContext hook is used inside Context API (or rather,it is a hook provided by React that works with Context API).
        * They are not the same thing, but they are used together most of the time.
     
    • ⁡⁣⁢⁣Basic syntax:⁡
        const value = useContext(MyContext);
        - This retrieves the current value of MyContext.

    • ⁡⁣⁢⁣When to use:⁡
        - When you need to access context values in deeply nested components.
        - When you want to avoid prop drilling (passing props through many layers).
        
    • ⁡⁣⁢⁣Common use cases:⁡
        - Theme management (light/dark mode).
        - User authentication and authorization.
        - Language localization.
        - Global settings and preferences.   
        
   ⁡⁣⁢⁣ • Advantages⁡
        ✅ Avoids prop drilling
        ✅ Makes code cleaner and easier to maintain
        ✅ Built into React (no external library needed)

    ⁡⁣⁢⁣• Disadvantages⁡
        ⚠️ Can make components less reusable (they depend on context).
        ⚠️ Can cause extra re-renders if not used carefully (we’ll cover best practices later).   
        
    ________________________________________________________________________________________

    1️⃣⁡⁣⁣⁢ React.createContext()⁡ 
       - What it Does
            <> This function creates a Context object.
            <> You call it once, then use it to create a Provider and Consumer.

        Example:-
            ⁡⁢⁢⁢import React, { createContext } from "react";

            export const ThemeContext = createContext("light"); 
            ? "light" is default value if no provider is found
⁡

        🔑 Key Point:
            - Default value is used only when there is no Provider above in the component tree.

    2️⃣ ⁡⁣⁣⁢Context.Provider⁡
        What it Does
            <> Provider is a component that comes with every Context object.
            <> It provides a value to all components that consume this context.

        Example:-
            ⁡⁢⁢⁢import { ThemeContext } from "./ThemeContext";

            function App() {
                return (
                    <ThemeContext.Provider value="dark">
                    <Toolbar />
                    </ThemeContext.Provider>
                );
            }⁡


    * Here, every component inside <ThemeContext.Provider> will have access to "dark" as the context value.

    3️⃣ ⁡⁣⁣⁢Context.Consumer (Old Way)⁡
        - Before useContext, you had to use Consumer to read the value.
        - This uses a render prop pattern.

        Example:-
            ⁡⁢⁢⁢function Toolbar() {
            return (
                    <ThemeContext.Consumer>
                    {(value) => <button>Theme: {value}</button>}
                    </ThemeContext.Consumer>
                );
            }⁡


    ⚠️ Drawback:

        - This syntax is verbose.
        - Hard to use when you need multiple contexts → leads to nested Consumers (ugly code).

    4️⃣ ⁡⁣⁣⁢useContext Hook (Modern Way)⁡
        - The simpler and modern way to consume context inside a function component.

        Example:-
        ⁡⁢⁢⁢    import { useContext } from "react";
            import { ThemeContext } from "./ThemeContext";

            function Toolbar() {
                const theme = useContext(ThemeContext);
                return <button>Theme: {theme}</button>;
            }⁡


    ✅ Much cleaner.
    ✅ Works well with multiple contexts (no nesting hell).
*/
