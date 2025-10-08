import React from 'react'

function ChildA({text , userInfo }) {
    return (
        <div>
            <h1>Child A Component</h1>
            <h2>The msg from parent component : {text}</h2>

            <h2>obj from parent component : {userInfo?.name}</h2>
        </div>
    )
}

export default ChildA