import React from 'react'

function Function_Component({message}) {
    return (
        <>
            <h1 style={{color: 'orange'}} >Function_Component</h1>

            <p>This message is coming from a parent component: {message}</p>
        </>
    )
}

export default Function_Component