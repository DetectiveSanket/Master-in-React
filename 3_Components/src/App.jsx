
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
            
             <Function_Component message={message}/> {/*//? Passing message as prop to Function_Component */}
             <AnotherFunctionComponent />

            <hr />

            <Class_Component message={message} /> {/*//? Passing message as a prop */}

            <hr />

            {/* Higher-Order Components (HOC) */}
            {/* Example usage of HOC: wrap Function_Component with withHello */}
            {withHello(Function_Component)({ message: "Hello from HOC" })}



        </>
    )
}

export default App

/* 
    # Components in React
      - Components are the building blocks of a React application.
      - They allow you to split the UI into independent, reusable pieces.
      - Each component has its own logic and controls its own rendering.
      - Components can be classified into two main types: Functional and Class components.

      - Functional Components: These are JavaScript functions that return JSX. They can accept props as arguments and are typically used for presentational purposes.

      - Class Components: These are ES6 classes that extend the React.Component class. They can hold and manage their own state and lifecycle methods.

*/
