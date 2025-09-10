
import './App.css'

function App() {


    return (
      <>
        <h1>State Management Libraries</h1>
        <p>
            |__13.
            |── State Management Libraries
            | ├── Redux                 
            | | ├── Actions            
            | | ├── Reducers           
            | | ├── Store              
            | | ├── connect()          
            | | └── useSelector/useDispatch 
            | ├── Redux Toolkit         
            | ├── Zustand              
            | ├── Recoil               
            | └── Context + useReducer
        </p>
      </>
    )
}

export default App;

/* 
    # ⁡⁢⁣⁣𝗦𝘁𝗮𝘁𝗲 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗟𝗶𝗯𝗿𝗮𝗿𝗶𝗲𝘀⁡

   Q) Why Do We Need State Management Libraries?
   -> React gives us ⁡⁣⁣⁢useState and useReducer⁡, which work fine for local state.
        But as your app grows:

      - You have many components needing the same data.
      - You pass props through many layers (prop drilling).
      - You have complex logic for updating state (e.g., shopping cart, user session, API cache).
      - You want predictable state changes (easy debugging, undo/redo, logging).

        That’s where state management libraries help.

        They provide:
        ✅ Centralized state (a single source of truth)
        ✅ Predictable updates
        ✅ Better debugging tools
        ✅ Easier scaling for big apps

    1️⃣ ⁡⁢⁣⁣𝗥𝗲𝗱𝘂𝘅⁡    
        - THe most popular state management library for React.
        - Uses a single store to hold the entire app state(data).
        - State is read-only, and changes are made with pure functions called reducers.
        - Actions describe what happened, and reducers specify how the state changes in response.

        • Key Concepts:
            - Actions: Plain objects describing what happened.
            - Reducers: Pure functions that take the current state and an action, and return a new state.
            - Store: Holds the app state and provides methods to access and update it.
            - useSelector: Hook to read state from the store.
            - useDispatch: Hook to dispatch actions to the store.

    2️⃣ ⁡⁢⁣⁣Redux Toolkit (RTK)⁡
            - Redux Toolkit is the official, recommended way to use Redux.
            - Official, opinionated, batteries-included toolset for efficient Redux development.
            - Simplifies store setup, reduces boilerplate, and includes useful utilities.
            - Middleware: For handling side effects (e.g., async actions).
            - DevTools: For debugging and inspecting state changes.

        • Key Features:
            - configureStore: Simplifies store setup with good defaults.
            - createSlice: Combines reducers and actions in one place.
            - createAsyncThunk: Simplifies async logic (e.g., API calls).
            - Immer: Allows writing "mutating" logic that produces new immutable state.

    ⁡⁢⁣⁣3️⃣ Zustand
    4️⃣ Recoil
    5️⃣ Context + useReducer⁡

*/
