
import { useEffect, useState } from 'react'
import './App.css'

function App() {
    
    const [title , setTitle] = useState("");
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [change , setChange] = useState(false);

    useEffect(() => {
        console.log("UseEffect is called")
        async function fetchData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const result = data.slice(0, 10);
                setTitle(result);
                
            }catch (e) {
                console.error(e);
                setError(e.message);
            }finally {
                setLoading(false);
            }
        }
        fetchData();

    }, [ change ]);

  

  return (
        <>
            <div>
                <h1>Photos from API</h1>
                <div className="photo-grid">
                    {
                        loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            title.map((photo) => (
                                <div key={photo.id} className="photo">
                                    {/* <img src={photo.url} alt={photo.title} /> */}
                                    <p>{photo.title}</p>
                                    <p>{photo.id}</p>
                                </div>
                            ))
                        )
                    }
                </div>

                <button onClick={() => setChange(!change)}>Change State</button> 
                {change && <p>State Changed!</p>} {/* when when change value is true, this message will be displayed*/}
            </div>
        </>
    )
}

export default App
