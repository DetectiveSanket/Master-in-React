

import './App.css'
// Import the example component from the correct folder and alias it with PascalCase
import UseStateExample from './State Management/useState_Example'

 

function App() {
  return (
        <>
            <div>
                <h2>State Management</h2>
                <p>
                    |── State Management
                    | ├── useState Hook          
                    | | ├── State Updates       
                    | | ├── State with Objects  
                    | | └── State with Arrays   
                    | ├── State vs Props         
                    | ├── Lifting State Up       
                    | └── State Management Patterns 
                </p>
            </div>

            <UseStateExample />

        </>
    )
}

export default App
