import React, { useContext } from 'react';
import { UserContext } from '../Hooks/UseContext_Hooks';

function ChildC() {

   // step4: consume the data 
   const user = useContext(UserContext)

    return (
        <div>
            <h3>ChildC</h3>
            <h2>Context value: {user?.name} </h2> 
            <p>child C get value form useCContext_hook successfully without props drilling</p>
        </div>
    );
}

export default ChildC