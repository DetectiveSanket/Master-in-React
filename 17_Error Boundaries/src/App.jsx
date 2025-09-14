
import './App.css'
import BuggyComponent from './pages/BuggyComponent';

function App() {


  return (
        <>
            <h1>Error Boundaries</h1>
            <hr />
            <p>
            |__17.
            |── Error Boundaries
            | ├── Error Boundary Class  
            | ├── componentDidCatch     
            | ├── getDerivedStateFromError 
            | └── Error Boundary Libraries 
            </p>

            {/* <BuggyComponent /> //? This will throw an error */}

        </>

    )
}

export default App;

/* 
    ⁡⁢⁣⁣## 𝗘𝗿𝗿𝗼𝗿 𝗕𝗼𝘂𝗻𝗱𝗮𝗿𝗶𝗲𝘀⁡

   🧠 ⁡⁣⁢⁡⁣⁢⁣What Are Error Boundaries?⁡⁡
        * React apps can crash if a component throws an error (e.g., due to a bug in rendering).
        - Normally, an error in one part of the UI can unmount the entire React app — bad for user experience.
        - Error Boundaries are ⁡⁣⁣⁢special components that catch JavaScript errors in their child components⁡ and display a ⁡⁣⁣⁢fallback⁡ ⁡⁣⁣⁢UI⁡ (instead of crashing the whole app).
        * Think of them like a try...catch block, but for React components.

__________________________________________________________________________________________________________________________

    • ⁡⁣⁢⁣Why Do We Need Error Boundaries?⁡
        - To prevent the entire app from crashing when a single component fails.
        - To provide a better user experience by showing a friendly error message.
        - To log errors for debugging and monitoring purposes.
       
        Example without Error Boundary:

        ⁡⁢⁢⁢import React from 'react';⁡

        ⁡⁢⁢⁢function BuggyComponent() {
            throw new Error("Something went wrong!");
            return <p>This will never render</p>; //? This line will never be reached. due to it react app will crash
          }
          
          function App() {
            return (
              <div>
                <h1>My App</h1>
                <BuggyComponent />  // App crashes completely 
              </div>
            );
          }⁡
            ⁡
        - Without error boundaries, this breaks your entire UI.
        - With error boundaries, you can show a friendly message like:
        - “Oops! Something went wrong. Please try again.”

__________________________________________________________________________________________________________________________
*/
