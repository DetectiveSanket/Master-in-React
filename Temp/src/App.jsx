
import './App.css'
import ChildA from './components/ChildA'

function App() {

    const msg = "hello from app component";
    const obj = {
        name: "John",
        age: 30,
        city: "New York",
        address:{
            street: "5th Avenue",
            number: 10
        },
        hobbies: ['reading', 'traveling', 'swimming']
    }

  return (
        <>
            <div>
                <h1>props passing in function component</h1>
                <ChildA text={msg} userInfo={obj} />
                {/* <ChildA obj={...obj} /> */}
            </div>
        </>
    )
}

export default App
