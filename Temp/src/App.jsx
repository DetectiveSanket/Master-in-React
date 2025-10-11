
import { useMemo, useState } from 'react';
import './App.css'

function App() {
    
    const [input , setInput] = useState(0);

    function expensiveCalculation(num) {
        console.log("Calculating...");
        for(let i = 0 ; i < 1000000000 ; i++) ;
        return num * 2;
    }

    const res = useMemo(() => expensiveCalculation(input), [input]);  

  return (
        <>
            <div>
                <input 
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                 />

                <h3>Expensive Calculation : {res}</h3>
            </div>
        </>
    )
}

export default App;
