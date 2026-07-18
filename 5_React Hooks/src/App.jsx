
import './App.css'
import UseCallbackhook from './Hooks/UseCallback_hook';
import UseContextHooks from './Hooks/UseContext_Hooks';
import UseEffectHooks from './Hooks/useEffect_Hooks';
import UseMemoHook from './Hooks/UseMemo_Hook';
import UseReducerHook from './Hooks/useReducer_Hook';

function App() {


    return (
        <>
            <h1>React Hooks</h1>
            <p>
                |__5.
                |── React Hooks
                | ├── Built-in Hooks
                | | ├── useState            
                | | ├── useEffect           
                | | | ├── Component Lifecycle 
                | | | ├── Cleanup Functions  
                | | | └── Dependency Array   
                | | ├── useContext          
                | | ├── useReducer          
                | | ├── useCallback         
                | | ├── useMemo             
                | | ├── useRef              
                | | ├── useImperativeHandle 
                | | ├── useLayoutEffect     
                | | └── useDebugValue       
                | ├── Custom Hooks          
                | └── Hooks Rules 
            </p>

            {/* <UseEffectHooks />

                <hr />
            <UseReducerHook />

                <hr />
                
            <UseContextHooks />
            
                <hr />
            <UseMemoHook /> */}

            <hr />

            <UseCallbackhook />
        </>
    )
}

export default App;

/* 
  ## 𝙍͟𝙚͟𝙖͟𝙘͟𝙩 𝙃͟𝙤͟𝙤͟𝙠͟𝙨

    ⁡⁢⁣⁣𝟭. 𝗥𝗲𝗮𝗰𝘁 𝗛𝗼𝗼𝗸𝘀 𝗢𝘃𝗲𝗿𝘃𝗶𝗲𝘄⁡

        ^ React hooks are functions that allow functional components to use state, lifecycle methods, and other React features. — no need for class components anymore.

        * Before React 16.8, you needed class components to use features like lifecycle methods and state. Hooks replaced that pain. Now, you can use functional components for everything!


    ⁡⁢⁢⁣⁡⁢⁣⁣𝟮. 𝗕𝘂𝗶𝗹𝘁-𝗶𝗻 𝗛𝗼𝗼𝗸𝘀⁡⁡

        ⁡⁣⁢⁣a) useState⁡
            • We’ve already covered this in the previous module: 
                - Manages local component state.

        ⁡⁣⁢⁣b) useEffect⁡
            • useEffect is used to perform side effects in React components.
            • It can be used for data fetching, subscriptions, or manually changing the DOM.

        ⁡⁣⁢⁣c)⁡ ⁡⁣⁢⁣useContext⁡
            • useContext is used to access the React context API.
            • It allows you to share values (like themes or user info) between components without prop drilling.

        ⁡⁣⁢⁣d) useReducer⁡
            • useReducer is an alternative to useState for managing complex state logic.
            • It’s particularly useful for managing state in larger applications.

        ⁡⁣⁢⁣e) useCallback⁡
            • useCallback is used to memoize callback functions.
            • It helps prevent unnecessary re-renders by returning a memoized version of the callback.

        ⁡⁣⁢⁣f) useMemo⁡
            • useMemo is used to memoize expensive calculations.
            • It helps optimize performance by recalculating the value only when its dependencies change.

        ⁡⁣⁢⁣g) useRef⁡
            • useRef is used to create a mutable ref object.
            • It can be used to access DOM elements or store mutable values that don’t trigger re-renders.

        - useImperativeHandle
        - useLayoutEffect
        - useDebugValue

    ⁡⁢⁣⁣3. Custom Hooks⁡
        - You can build your own hooks to share logic between components.
        - A custom hook is just a function starting with "⁡⁣⁣⁢use⁡" that can call other hooks.
            > ex:- useFetch, useLocalStorage, useForm, etc.

    ⁡⁢⁣⁣4. Hooks Rules⁡
      * 1) Hook can only call at the top level.
            - Don’t call inside loops, conditions, or nested functions.
            - This ensures consistent hook call order across renders.

            because React relies on the order of hook calls to associate state and effects with the correct component instance. If you call hooks conditionally or inside loops, the order of calls may change between renders, leading to bugs and unexpected behavior.

            > Under the hood, React relies on the order in which Hooks are called to associate state with a specific component. React does not use unique IDs or names to remember which useState belongs to which variable; it simply uses a sequential array or linked list.Here is exactly why calling Hooks inside loops, conditions, or nested functions breaks this mechanism:
            
      * 2) Hook can only call or used from React functions.
            - Functional components.
            - Custom hooks.
            - Not from regular JS functions.

    ⁡⁢⁣⁣##  Summary⁡
        - Basic state and effects → useState, useEffect.
        - Shared/global state → useContext, useReducer.
        - Performance optimizations → useMemo, useCallback.
        - DOM manipulation → useRef, useImperativeHandle, useLayoutEffect.
        - Debugging → useDebugValue.
        - Reusable logic → Custom Hooks.
        - Golden rules → Top-level only, React functions only.       
*/
