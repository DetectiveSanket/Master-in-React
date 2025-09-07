import { useState } from 'react';
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {

    const [isLoggedIn, ] = useState(true);

    //*  1> if/else statement 
            
        // if(isLoggedIn) {
        //     return (
        //         <LogoutBtn />
        //     )
        // }
        // else {
        //     return (
        //         <LoginBtn />
        //     )
        // }
        //> isLoggedIn decides which JSX block will be returned.

    //* 4) Early Returns
        if(!isLoggedIn) {
            return <LoginBtn />
        }
    
        
        

    return (
        <>
            <h1>Conditional statement</h1>
            <p>
                |__7.
                |── Conditional Rendering
                | ├── if/else statements     
                | ├── Ternary Operator      
                | ├── Logical && Operator   
                | └── Switch Statements    
            </p>

            {
                //* 2> Ternary Operator
                isLoggedIn ? <LogoutBtn /> : <LoginBtn />
            }

            {
                //* 3> Logical && Operator
                isLoggedIn && <LogoutBtn />
            }

            {//* 4> Early Returns
                // if(!isLoggedIn) {
                //     return <LoginBtn />
                // }
                // return <LogoutBtn />
            }


           
        </>
    )
}

export default App;


/* 
    ⁡⁢⁣⁣# 𝗖𝗼𝗻𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗥𝗲𝗻𝗱𝗲𝗿𝗶𝗻𝗴 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁⁡
        - Conditional rendering in React allows you to render different components or elements based on certain conditions. This is typically done using JavaScript conditional statements like if/else, ternary operators, logical && operators, or switch statements.
        - It helps in creating dynamic and interactive user interfaces by displaying content based on user actions, application state, or other factors.

       ⁡⁢⁣⁣• ⁡⁣⁢⁣𝗜𝗳/𝗘𝗹𝘀𝗲 𝗦𝘁𝗮𝘁𝗲𝗺𝗲𝗻𝘁⁡⁡
            - The simplest way to render conditionally is using a normal if/else statement in JavaScript.
            - You can use if/else statements to decide which component or element to render based on a condition.
            - You decide what JSX to return before rendering.


       ⁡⁢⁣⁣• ⁡⁣⁢⁣⁡⁣⁢⁣⁡⁣⁢⁣𝗧𝗲𝗿𝗻𝗮𝗿𝘆 𝗢𝗽𝗲𝗿𝗮𝘁𝗼𝗿⁡⁡
            - The ternary operator is a concise way to perform conditional rendering in React.
            - It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
            - The syntax is: condition ? expressionIfTrue : expressionIfFalse.
            - It is often used for simple conditional rendering in JSX.

       ⁡⁢⁣⁣•⁡ ⁡⁣⁢⁣𝗟𝗼𝗴𝗶𝗰𝗮𝗹 && 𝗢𝗽𝗲𝗿𝗮𝘁𝗼𝗿⁡
            - condition && expression
            - If condition is true → renders the expression.
            - If condition is false → renders nothing.

       • ⁡⁣⁢⁣𝗦𝘄𝗶𝘁𝗰𝗵 𝗦𝘁𝗮𝘁𝗲𝗺𝗲𝗻𝘁⁡
            - The switch statement is another way to perform conditional rendering in React, especially when you have multiple conditions to check.
            - It evaluates an expression and matches its value against multiple case clauses.
            - When a match is found, the corresponding block of code is executed.

       • ⁡⁣⁢⁣⁡⁣⁢⁣𝗘𝗮𝗿𝗹𝘆 𝗥𝗲𝘁𝘂𝗿𝗻𝘀⁡
            - Early returns can be used in React components to conditionally render content by returning early from the component function based on certain conditions.
            - This approach helps to avoid deeply nested conditional statements and makes the code more readable.
            - You can use early returns to handle specific cases or conditions before rendering the main content of the component.

    ✅ Summary

       - if/else → simplest, but not inline.
       - Ternary (? :) → compact, good for toggling between two UI states.
       - Logical && → great for conditionally showing something or nothing.
       - Switch → best for multiple conditions (status codes, roles, etc.).

    ⚡ Pro tip:
       - Sometimes a mix is used:
       - switch for big conditions (loading/error/success).
       - && for optional UI (like badges or notifications).  
             
*/  