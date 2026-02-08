/* 
    import React from 'react'

    function CallbackHookchild(props) {

        console.log("Child component re-rendered again....");

        return (
            <div>

                <h3>Child Component</h3>
                <p>Count value in child component : {props.name}</p>
            </div>
        )
    }

    export default CallbackHookchild; 
*/

//* to avoid the unnecessary re-rendering of the child component we use React.memo *//

// * If your are sending function as a prop , then react.memo is not able to save you from re-rendering of child component.
// * So to solve this problem we have to use useCallback hook.  
import React from 'react'
const CallbackHookchild = React.memo (
    (props) => {

        console.log("Child component re-rendered again....");

        return (
            <div>

                <h3>Child Component</h3>
                <p>Count value in child component : {props.name}</p>
                <button onClick={props.onClick}>Increment from child</button>
            </div>
        )
    }
) 

export default CallbackHookchild;





//* React.memo -> wrap -> component re-render tabhi hoga jab props change hoga. nahi to re-render nahi hoga.