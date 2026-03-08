import React from 'react'

function Error_Boundaries() {
    return (
        <div>Error_Boundaries</div>
    )
}

export default Error_Boundaries;

/* 
    * 😱 Without Error Boundary

        ^ ❌ One broken component crashes the ENTIRE app!
        function BrokenComponent() {
            throw new Error('Something went wrong!');
            return <p>Hello</p>;
        }

        function App() {
            return (
                <div>
                    <h1>My App</h1>
                    
                    <BrokenComponent />  ->💥 ⁡⁢⁣⁣whole app goes blank!⁡ 
                </div>
            );
        }

    * ✅ With Error Boundary

        ^ ✅ Only broken part shows fallback — rest of app works fine! No need to import anythink for Error Boundary because its already inbuilt in react. we just have to create a class component and use the lifecycle method of that class component to catch the error and show the fallback UI.
        function App() {
            return (
                <div>
                    <h1>My App</h1>
                ><  you can USE an error boundary (wrap) around function components!      
                    & ✅ Each section has its own boundary
                    <ErrorBoundary>  🛡️ boundary starts
                        <BrokenComponent /> 💥 error thrown here --> 💥 ⁡⁢⁣⁣only THIS part shows fallback ⁡
                    </ErrorBoundary>   🛡️ boundary catches it

                    & ✅ Each section has its own boundary
                    <ErrorBoundary>
                      <ProductCard product={null} />  --> 💥 only this breaks 
                    </ErrorBoundary>

                </div>
            );
        }

*/

/* 
    ## ⁡⁢⁣⁣𝗥͟𝗲͟𝗮͟𝗰͟𝘁 𝗘͟𝗿͟𝗿͟𝗼͟𝗿 𝗕͟𝗼͟𝘂͟𝗻͟𝗱͟𝗮͟𝗿͟𝗶͟𝗲͟𝘀⁡

    🤔⁡⁢⁣⁣ 𝗪𝗵𝗮𝘁 𝗜𝘀 𝗜𝘁?⁡
        * An Error Boundary is a component that catches JavaScript errors anywhere in its child component tree and shows a fallback UI instead of crashing the whole app.

        > Think of it like a try/catch but for React components 🎯

        ⚠️ Class vs Function — IMPORTANT!
        -------------------------------------------------
        | Component Type   |  Can Be Error Boundary?
        | Class Component  | ✅ YES — fully supportedFunction 
        | Component        |  ❌ NO — not supported natively
        --------------------------------------------------------

        * Error Boundaries can ONLY be class components — because they need componentDidCatch and getDerivedStateFromError lifecycle methods which hooks cannot replace (yet).
        ^ However, you can USE an error boundary (wrap) around function components!    
*/