
import './App.css'
import { Function_Component , AnotherFunctionComponent } from './Components/Function_Component'
import Class_Component from './Components/Class_Component'
import withHello from './Components/Higher_order_Component'

function App() {

    const message = "Hello from App Component"
 
  return (
        <>
        <h1 style={{color: 'green'}}>React Components: Those are topic that we are going to this Section</h1>
            {/* <p>
                |── Components
                | ├── Functional Components ✔️
                | ├── Class Components      ✔️
                | ├── Component Props        ✔️
                | | ├── Passing Props       ✔️
                | | ├── Props Validation    ✔️
                | | ├── Default Props       ✔️
                | | └── Props Destructuring ✔️
                | ├── Component Composition ✔️
                | └── Component Patterns ✔️
                | ├── Higher-Order Components (HOC) ✔️
                | └── Render Props ✔️
            </p> */}

            <hr />
            
             <Function_Component message={message}/> {/*// Passing message as prop to Function_Component */}
             <AnotherFunctionComponent />

            <hr />

            <Class_Component message={message} /> {/* Passing message as a prop */}

            <hr />

            {/* Higher-Order Components (HOC) */}
            {/* Example usage of HOC: wrap Function_Component with withHello */}
            {withHello(Function_Component)({ message: "Hello from HOC" })}



        </>
    )
}

export default App
