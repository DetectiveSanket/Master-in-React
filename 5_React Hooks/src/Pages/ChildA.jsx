import React, { useContext } from 'react'
import ChildB from './childB'
import { UserContext } from '../Hooks/UseContext_Hooks'

function ChildA() {
    const user = useContext(UserContext)
    return (
        <div>
            <h3>ChildA</h3>
            <ChildB/> {/* check the relationship between ChildA and ChildB */}

            <div>
                <h4>User Info</h4>
                <p>Name: {user?.name}</p>
            </div>
        </div>
    )
}

export default ChildA