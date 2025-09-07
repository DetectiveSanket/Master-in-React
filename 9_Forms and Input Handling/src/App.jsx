import { useRef, useState } from 'react'

import './App.css'

function App() {

  // 1. Controlled Components  
    const [name , setName] = useState('');

    function handleChange(e) {
        setName(e.target.value)
        console.log("e : ", e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Form submitted with name: ${name}`);
        setName(''); // Clear controlled input after submission
    }
  // 2. Uncontrolled Components
    const inputRef = useRef();

    function unControl(e) {
        e.preventDefault();
        alert(`Form submitted with name: ${inputRef.current.value}`);
        setName(''); // Clear controlled input after submission but not working for uncontrolled
        inputRef.current.value = ''; // Clear uncontrolled input after submission
    }

  // 3. Form Validation

  // 4. Multiple Inputs

  // 5. Form Libraries
    // - Formik
    // - React Hook Form

    return (
        <>
            <h1>Forms and Input Handling</h1>
            <p>
                |── Forms and Input Handling
                | ├── Controlled Components 
                | ├── Uncontrolled Components 
                | ├── Form Validation       
                | ├── Multiple Inputs       
                | └── Form Libraries        
                | ├── Formik               
                | └── React Hook Form  
            </p>
                <hr />

            {/* ⁡⁢⁣⁡⁣⁢⁣1.Controlled Components⁡⁡ */}
            <p>Form Controlled will be here..</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    value={name}
                    placeholder='Enter your name'
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>
            </form>
            {/* 
                Explanation:
                        - Input value={name} means React controls the input.
                        - onChange updates state → re-renders → updates input value.
                        👉 Used most of the time because it gives full control (validation, formatting, etc.).
            */}

            <hr />

            {/* ⁡⁢⁣⁡⁣⁢⁣2.Uncontrolled Components⁡⁡ */}
            <p>Form UnControlled will be here..</p>
            <form onSubmit={unControl}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    ref={inputRef}
                    placeholder='Enter your name'
                />

                <button type='submit'>Submit</button>
            </form>
            {/* 
                Explanation:
                        - Input’s value is not in React state.
                        - You “grab” the value only when needed using ref.
                        - 👉 Useful for quick forms or when integrating with non-React code.
            */}

            <hr />

            {/* ⁡⁢⁣⁡⁣⁢⁣3.Form Validation⁡⁡ */}
            <p>Form Validation will be here</p>

            <hr />

            {/* ⁡⁢⁣⁡⁣⁢⁣4.Multiple Inputs⁡⁡ */}
            <p>Multiple Inputs will be here</p>

            <hr />

            {/* ⁡⁢⁣⁡⁣⁢⁣5.Form Libraries⁡⁡ */}
            <p>Form Libraries will be here</p>
        </>
    )
}

export default App;

/* 
    ⁡⁢⁣⁣# 𝗙𝗼𝗿𝗺𝘀 𝗮𝗻𝗱 𝗜𝗻𝗽𝘂𝘁 𝗛𝗮𝗻𝗱𝗹𝗶𝗻𝗴⁡
    - Forms are essential for user input in web applications.
    - React provides ways to handle form inputs and manage their state.

    • ⁡⁣⁢⁣𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗲𝗱 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀⁡
        - In controlled components, form data is handled by the React component's state.
        - The input's value is set via state, and changes are managed through event handlers.
        - This approach provides more control over the form data and validation.
        - A controlled component is an input whose value is fully controlled by React state.
        - The value comes from state, and the onChange updates that state.
        - React is the single source of truth.

    • ⁡⁣⁢⁣Uncontrolled Components⁡    
*/
