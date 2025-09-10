import React, { useContext } from 'react'
import { UseContext } from '../App';
import ChildB from './ChildB';

function ChildA() {

    const user = useContext(UseContext);

  return (
        <div>
            <h2>Child A Component</h2>
            <p>Hello , {user.name} </p>

            <ChildB />
        </div>
    )
}

export default ChildA;