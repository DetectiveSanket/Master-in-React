import React, { useState } from 'react'
import './App.css'

function App() {

    // 1. Rendering Lists && 2. Keys in React
    const fruits = ['Mango', 'Apple', 'Banana', 'Grapes'];

    // 3. Dynamic Lists
    const [tools , setTools] = useState(['HTML', 'CSS', 'JavaScript']);

    function addTools() {
        setTools([...tools , 'ReactJS'])
    };

    function removeTools(tool) {
        setTools(tools.filter((t) => t !== tool))
    }

    return (
        <>
            <h1>Lists and Keys</h1>
            <p>
                |── Lists and Keys
                | ├── Rendering Lists       
                | ├── Keys in React         
                | ├── Dynamic Lists         
                | └── List Performance
            </p>

            {/*⁡⁢⁣⁣ Rendering Lists⁡ */}
            <ul>
                {
                    fruits.map((fruits , index) => {
                        return <li>{index} = {fruits}</li>
                    })
                }
                {/* 
                    Explanation :-
                        - Each array item (fruit) becomes a <li> in the list.
                */}
            </ul>

            <hr />

            {/*⁡⁢⁣⁣ ⁡⁢⁣⁣Keys in React⁡⁡ */}
            <ul>
                {
                    fruits.map((fruits , index) => {
                        return <li key={fruits}>{index} = {fruits} </li>
                    })
                }
                {/* 
                    Explanation :-
                        - Here, fruit itself ("Apple", "Banana") is used as the key.
                        - Now React knows exactly which list items changed if you update the array.
                */}
            </ul>

            <hr />

            {/* ⁡⁢⁣⁣3. Dynamic Lists ⁡*/}
            <div>
                <h2>Dynamic Lists</h2>
                <button onClick={addTools}>Add Tools</button>

                <ul>
                    {
                        tools.map((tool ) => (
                             <li key={tool}>
                                {tool}
                                <button onClick={()=> removeTools(tool)}>Remove the Tool</button>
                            </li>
                        ))
                    }
                    {/* 
                        Explanation :-
                            - setTodos([...todos, "ReactJs"]) → creates a new array with the new todo.
                            - Each item has a unique key={todo}. for example key={ReactJs}
                            - Remove works by filtering out the clicked item. 
                    */}
                </ul>    

            </div>
        </>
    )
}

export default App;

/* 
    ⁡⁢⁣⁣# Lists and Keys⁡

        ⁡⁣⁢⁣• Rendering Lists⁡
            - Rendering a list in React means mapping an array to JSX elements.
            - React uses JavaScript’s map() to loop and return elements.
            

            • ⁡⁣⁣⁢Keys in React⁡
                - Keys are unique identifiers for React to track list items.
                - Keys are used to uniquely identify and differentiate between components in React. They help React identify which items have changed, added, or removed
                - Without keys, React may re-render entire lists unnecessarily.
                - A key should be:
                    Unique among siblings.
                    Stable (not change between renders).
    
                ⚠️ Don’t use array indexes (0,1,2,...) unless the list never changes order.
                
         •⁡⁣⁣⁢ What Are Keys?⁡
            - Keys are special string/number attributes you give to elements inside a list. They help React identify which items changed, were added, or removed.   

         • ⁡⁣⁣⁢Dynamic Lists⁡
            - Lists can be dynamic: you can add, remove, or update items.
            - React efficiently re-renders only the changed items (if keys are used correctly).

     • ⁡⁣⁣⁢List Performance⁡
        - Lists can get very large (e.g., 10,000+ rows).
        - Performance issues happen if React re-renders the entire list every time.
        - Optimization strategies:
        ✅ Use unique, stable keys.
        ✅ Use React.memo for list items to prevent unnecessary re-renders.
        ✅ Use windowing/virtualization libraries (like react-window or react-virtualized) for very large lists.

    ✅ Summary
        <> Rendering Lists → Use .map() to create JSX from arrays.
        <> Keys → Unique + stable identifiers so React knows what changed.
        <> Dynamic Lists → Use state (useState) to add/remove/update items.
        <> List Performance → Use keys, memo, and virtualization for large lists.    

*/
