import { useState } from 'react'


import './App.css'
  const [count, setCount] = useState(0)



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
            
        </>
    )
}

export default App
