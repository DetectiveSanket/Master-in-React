import React from 'react'

export function Function_Component({message}) {

    const helloMessage = "Hello from Function Component";

    return (
        <>
            <h1 style={{color: 'orange'}} >Function_Component</h1>

            <p>msg : {helloMessage}</p>
            <p>This message is coming from a parent component: {message}</p>
        </>
    )
}

// another functional component syntax
export function AnotherFunctionComponent() {
    

    return (
        <>
            <h3 style={{color: 'green'}} >AnotherFunctionComponent from same file</h3>
        </>
    )
}

// export default Function_Component;

// export {
//     Function_Component,
//     AnotherFunctionComponent
// }
