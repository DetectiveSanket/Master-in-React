import React from 'react'

export function FunctionComponent({message , userInfo}) {

    const helloMessage = "Hello from Function Component";

    return (
        <>
            <h1 style={{color: 'orange'}} >Function_Component</h1>

            <p>msg from inside component : {helloMessage}</p>
            <p>This message is coming from a parent component: {message}</p>

            <h2>name : {userInfo?.name}</h2>
            <h2>age : {userInfo?.age}</h2>
            <h2>city : {userInfo?.city}</h2>
            <h2>street : {userInfo?.address?.street}</h2>
            <h2>number : {userInfo?.address?.number}</h2>
            <h2>hobbies : {userInfo?.hobbies?.join(', ')}</h2>
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
