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
        const [email , setEmail] = useState('');
        const [error , setError] = useState('');

        function validateEmail(e) {
            e.preventDefault();

            if(!email.includes('@')) {
                setError('Invalid email address');
            }
            else {
                setError('');
                alert(`Form submitted with email: ${email}`);
                setEmail(''); // Clear controlled input after submission
            }
        }

/* 
         - Validation ensures that the data entered into a form meets certain criteria before it is processed or submitted.
         - It helps maintain data integrity and improves user experience by providing immediate feedback on input errors.
         - Validation can be:
         - Client-side validation (e.g., checking if fields are filled, email format).
         - Server-side validation (e.g., checking for unique usernames).
         - Can be done using controlled components (validate on change/submit) or uncontrolled components (validate on submit).
 */

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
            <form onSubmit={validateEmail}>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text"
                    value={email}
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p style={{color:'red'}}>{error}</p>}    
                <button type='submit'>Submit</button>
            </form>
            {/* 
                Explanation:
                        - setError updates when validation fails.
                        - Error message shows dynamically..
            */}

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
        - An uncontrolled component uses the DOM itself to keep the input’s value.
        - Instead of React state, you use useRef to access the value when needed.
        
    • ⁡⁣⁢⁣⁡⁢⁣⁣⁡⁣⁢⁣𝗙𝗼𝗿𝗺 𝗩𝗮𝗹𝗶𝗱𝗮𝘁𝗶𝗼𝗻⁡ ⁡   
        - Validation ensures inputs are correct before submission.
        - Can be:
            - Client-side (JS/React validation).
            - Server-side (after submission).
        - With controlled components, validation is easy since values are always in state.
        - With uncontrolled components, you may need to access values via refs for validation.

    • ⁡⁣⁢⁣⁡⁢⁣⁣⁡⁢⁣⁣⁡⁣⁢⁣𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗲 𝗜𝗻𝗽𝘂𝘁𝘀⁡⁡⁡   
        - Forms often have multiple inputs (text, checkboxes, radios, selects).
        - For controlled components, manage each input's state or use a single state object.
        - For uncontrolled components, use refs for each input.

    • ⁡⁣⁢⁣⁡⁢⁣⁣⁡⁣⁢⁣𝗙𝗼𝗿𝗺 𝗟𝗶𝗯𝗿𝗮𝗿𝗶𝗲𝘀⁡
        - 
        - Libraries like Formik and React Hook Form simplify form handling.
        - They provide built-in validation, state management, and easier handling of complex forms.
        - Formik: Uses controlled components, provides form state, validation, and submission handling.
        - React Hook Form: Leverages uncontrolled components with refs for better performance, especially in large forms.
           like: performance, especially in large forms.

     ✅ Summary
        <> Controlled Components → React controls input state (value + onChange).
        <> Uncontrolled Components → DOM stores values, accessed via ref.
        <> Form Validation → Check user input before submission.
        <> Multiple Inputs → Manage form state with multiple fields.
        <> Formik → Form library with declarative APIs and built-in validation.
        <> React Hook Form → Hook-based, performant, minimal re-renders.      
*/
