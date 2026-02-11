
// import React from 'react'
import VT from './Pages/VT'
import './App.css'

function App() {

    const arr = Array.from({length: 100} , (_,index) => index + 1);
    console.log(arr);

    return (
        <div>
            <VT arr={arr} height={300} itemHeight={20} />
        </div>
    )
}

export default App