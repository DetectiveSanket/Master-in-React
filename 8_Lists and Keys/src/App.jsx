
import './App.css'

function App() {

    const fruits = ['Mango', 'Apple', 'Banana', 'Grapes'];


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
        </>
    )
}

export default App;

/* 
    ⁡⁢⁣⁣# Lists and Keys⁡

        ⁡⁣⁢⁣• Rendering Lists⁡
            - Rendering a list in React means mapping an array to JSX elements.
            - React uses JavaScript’s map() to loop and return elements.


        • ⁡⁣⁢⁣Keys in React
            - Keys are unique identifiers for React to track list items.
            - Without keys, React may re-render entire lists unnecessarily.
            - A key should be:
                Unique among siblings.
                Stable (not change between renders).

            ⚠️ Don’t use array indexes (0,1,2,...) unless the list never changes order.
            
            ⁡
     ⁡⁣⁢⁣• Dynamic Lists

     • List Performance⁡

    

*/
