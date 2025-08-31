
import './App.css'
import UseEffectHooks from './Hooks/useEffect_Hooks';

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

            <UseEffectHooks />
        </>
    )
}

export default App;

/* 
    # React Hooks
      1. React Hooks Overview

        - Hooks are functions that let you “hook into” React features (like state, context, lifecycle methods) inside functional components — no need for class components anymore.

        - Before React 16.8, you needed class components to use features like lifecycle methods and state. Hooks replaced that pain. Now, you can use functional components for everything!





      2. Built-in Hooks

        a) useState
            • We’ve already covered this in the previous module: 
                - Manages local component state.

        b) useEffect
            • useEffect is used to perform side effects in React components.
            • It can be used for data fetching, subscriptions, or manually changing the DOM.

            * Side effects = anything outside rendering: fetching data, subscriptions, DOM manipulation, timers.

            • It replaces lifecycle methods in class components:
                - componentDidMount → run once after render.
                - componentDidUpdate → run on updates.
                - componentWillUnmount → cleanup.

        c) useContext
            • useContext is used to access the React context API.
            • It allows you to share values (like themes or user info) between components without prop drilling.
        d) useReducer
            • useReducer is an alternative to useState for managing complex state logic.
            • It’s particularly useful for managing state in larger applications.
        e) useCallback
            • useCallback is used to memoize callback functions.
            • It helps prevent unnecessary re-renders by returning a memoized version of the callback.
        f) useMemo
            • useMemo is used to memoize expensive calculations.
            • It helps optimize performance by recalculating the value only when its dependencies change.
        g) useRef
            • useRef is used to create a mutable ref object.
            • It can be used to access DOM elements or store mutable values that don’t trigger re-renders.
        - useImperativeHandle
        - useLayoutEffect
        - useDebugValue

    ## Custom Hooks

    ## Hooks Rules
*/
