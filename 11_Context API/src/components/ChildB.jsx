import React, { useContext } from 'react'
import { UseContext } from '../App'

function ChildB() {

    const user = useContext(UseContext);



  return (
        <div>
            <h2>Child B Component</h2>
            <p>Hello , {user.name} </p>
            <p>Your email is {user.email} </p>
            <p>Your age is {user.age} </p>
            <p>Your city is {user.city} </p>
            <p>Your country is {user.country} </p>

        </div>
    )
}

export default ChildB