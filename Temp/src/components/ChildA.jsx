import React from 'react'

function ChildA({text , name , age , city , address , hobbies }) {
    return (
        <div>
            <h1>Child A Component</h1>
            <h2>Message from Parent: {text}</h2>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>City: {city}</h2>
            <h2>Street: {address?.street}</h2>
            <h2>Hobbies: {hobbies?.join(', ')}</h2>
        </div>
    )
}

export default ChildA