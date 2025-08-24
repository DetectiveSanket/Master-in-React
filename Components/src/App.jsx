
import './App.css'
import Function_Component from './Components/Function_Component'
import Class_Component from './Components/Class_Component'

function App() {

    const message = "Hello from App Component"
 
  return (
        <>
        <h1 style={{color: 'green'}}>React Components: Those are topic that we are going to this Section</h1>
            {/* <p>
                |── Components
                | ├── Functional Components  
                | ├── Class Components       
                | ├── Component Props        
                | | ├── Passing Props       
                | | ├── Props Validation    
                | | ├── Default Props       
                | | └── Props Destructuring 
                | ├── Component Composition  
                | └── Component Patterns     
                | ├── Higher-Order Components (HOC) 
                | └── Render Props    
            </p> */}

            <hr />
            
             <Function_Component message={message}/> {/*// Passing message as prop to Function_Component */}

            <hr />

            <Class_Component message={message} /> {/* Passing message as a prop */}
        </>
    )
}

export default App
