

import './App.css'
// Import the example component from the correct folder and alias it with PascalCase
import UseStateExample from './State Management/useState_Example'

 

function App() {
  return (
        <>
            <div>
                <h2>State Management</h2>
                <p>
                    |── State Management ✔️
                    | ├── useState Hook   ✔️
                    | | ├── State Updates   ✔️
                    | | ├── State with Objects  ✔️
                    | | └── State with Arrays   ✔️
                    | ├── State vs Props   ✔️
                    | ├── Lifting State Up   ✔️
                    | └── State Management Patterns  ✔️
                </p>
            </div>

            <UseStateExample />

        </>
    )
}

export default App

/* 

    ⁡⁢⁣⁣𝗦𝘁𝗮𝘁𝗲 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 (𝗗𝗮𝘁𝗮 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁)⁡

    - State is a fundamental concept in React that allows components to manage and respond to changes in data over time. It represents the dynamic data that can change based on user interactions, API responses, or other events.

    - When state changes, React re-renders the component (or part of it) to reflect the new data. This is what makes React applications interactive and responsive to user input.
    
    •⁡⁣⁢⁣ 𝗪𝗮𝘆𝘀 𝘁𝗼 𝗠𝗮𝗻𝗮𝗴𝗲 𝗦𝘁𝗮𝘁𝗲 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁:⁡
        1. ⁡⁢⁣⁣useState Hook:⁡ The most common way to manage local state in functional components.
        2. useReducer Hook: For more complex state logic or when the next state depends on the previous one.
        3. useContext Hook: For sharing state across multiple components without prop drilling.
        4. Context API: For sharing state across multiple components without prop drilling.
        5. Third-Party Libraries: Such as Redux, MobX, or Zustand for larger applications with more complex state management needs.

    - React state should never be mutated directly. You always use the updater function.
    - To mutate something directly means to change the existing object or array itself instead of creating a new copy.

   # ⁡⁢⁣⁣𝗟𝗶𝗳𝘁𝗶𝗻𝗴 𝗦𝘁𝗮𝘁𝗲 𝗨𝗽 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁⁡ 🏋️ — Complete Guide

        🤔 What Exactly Is It?
            > Lifting state up is a pattern where the state of a child
            component is moved to its parent component,
            allowing multiple child components to share the
            same state.
            
            
            • Simple definition:
                > "When two or more components need the same data — move that state UP to their parent and pass it DOWN as props."

*/