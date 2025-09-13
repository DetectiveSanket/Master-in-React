
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {

    const route = createBrowserRouter([
        {
            path:"/",
            element:<div>
                <Navbar />
                <Home />
            </div>
        },
        {
            path:"/about",
            element:<div>
                <Navbar />
                <h1>About</h1>
            </div>
        },

        {
            path:"/contact",
            element:<div>
                <Navbar />
                <Contact />
            </div>
        },
    ])  


  return (
        <>
            <h1>React Router Dom</h1>
            <p>
                |__12.
                |── React Router
                | ├── Installation & Setup  
                | ├── Basic Routing         
                | ├── Route Parameters      
                | ├── Nested Routes         
                | ├── Navigation            
                | | ├── Link Component     
                | | ├── NavLink Component  
                | | └── useNavigate Hook   
                | ├── Route Guards          
                | └── Dynamic Routing 
            </p>
        <RouterProvider router={route}/>

        </>
    )
}

export default App;

/* 
    ⁡⁢⁣⁣## 𝗥𝗲𝗮𝗰𝘁 𝗥𝗼𝘂𝘁𝗲𝗿 𝗗𝗼𝗺⁡

        - React Router Dom is a powerful library for handling routing in React applications. It allows developers to create single-page applications with dynamic routing capabilities, enabling seamless navigation between different views or components without requiring a full page reload.

        * React Router is a library (not built into React) that lets you handle routing (switching pages/views) in a React app.
        - Without it, React apps are just single-page — you’d need to manually show/hide components.
        - React Router gives your app URLs, navigation, and browser history handling like a normal website.

        Q) why do we need React Router?
        A) In a React application, we often want to create multiple views or pages that users can navigate between. React Router provides a way to define these routes and manage the navigation between them seamlessly.

        ⁡⁣⁢⁣• Installation & SetUp⁡
            - npm install react-router-dom
            - import { BrowserRouter } from 'react-router-dom'
            - Wrap your app in <BrowserRouter> in main.jsx or index.js

        ⁡⁣⁢⁣• Basic Routing⁡
           - Define routes using <Routes> and <Route> components.
           - Each <Route> specifies a path and the component to render.

        ⁡⁣⁢⁣• Navigation⁡
            - Use <Link> or <NavLink> components to create navigation links.
            - <NavLink> can apply active styles based on the current route.
            - useNavigate hook allows programmatic navigation.

        ⁡⁣⁢⁣• Nested Routes⁡
            - Define routes within other routes to create nested views.
            - Use <Outlet> component to render child routes.

        ⁡⁣⁢⁣• Route Parameters⁡
            - Define dynamic segments in routes using :paramName.
            - Access parameters using useParams hook.

        ⁡⁣⁢⁣• Route Guards⁡
            - Implement protected routes that require authentication.
            - Redirect users based on their authentication status.

        ⁡⁣⁢⁣• Dynamic Routing⁡
            - Create routes dynamically based on data or user input.
            - Useful for applications with user-generated content or complex navigation structures.

        ___________________________________________________________________________________________________________

        🧠 ⁡⁢⁣⁣Two Ways to Set Up React Router⁡

        ⁡⁢⁣⁢React Router has two main setups:⁡

        🟢 1. The Old Way (BrowserRouter + Routes)

            - This is what most tutorials still show:

        main.jsx

        ⁡⁢⁢⁢import { BrowserRouter } from "react-router-dom";
        import App from "./App.jsx";

        createRoot(document.getElementById("root")).render(
        <StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </StrictMode>
        );⁡


        App.jsx

        ⁡⁢⁢⁢import { Routes, Route } from "react-router-dom";
        import Navbar from "./Navbar";
        import Home from "./Home";
        import Contact from "./Contact";

        function App() {
        return (
            <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </>
        );
        }⁡


        ✅ In this approach, BrowserRouter wraps your whole app.
        ✅ Inside App.jsx, you use <Routes> and <Route> to define pages.

        🟢 2. The New Way (RouterProvider + createBrowserRouter)

            - Your code is already using this method — and in this case, you do NOT wrap your app with BrowserRouter (commenting it out in main.jsx was correct ✅).

        App.jsx

        ⁡⁢⁢⁢import { createBrowserRouter, RouterProvider } from "react-router-dom";
        import Navbar from "./Navbar";
        import Home from "./Home";
        import Contact from "./Contact";

        const router = createBrowserRouter([
        {
            path: "/",
            element: (
            <div>
                <Navbar />
                <Home />
            </div>
            ),
        },
        {
            path: "/contact",
            element: (
            <div>
                <Navbar />
                <Contact />
            </div>
            ),
        },
        ]);

        export default function App() {
        return <RouterProvider router={router} />;
        }⁡


        ✅ Here, createBrowserRouter() already creates a BrowserRouter instance internally.
        ✅ You just give it to <RouterProvider />, and you’re done.
        ✅ No <BrowserRouter> needed in main.jsx.

        🧐 So… When Do You Use Which?
            - If you like the declarative style with <Routes> and <Route>, use BrowserRouter approach.
            - If you like a centralized config object (good for large apps), use createBrowserRouter + RouterProvider.
            - They do the same thing under the hood — just two different syntaxes.

        📌 Key Takeaways for Your Code

            ✅ Your setup is already correct.
            You are using the new approach, so you don’t need <BrowserRouter> in main.jsx.
            ✅ If you see tutorials using <BrowserRouter>, they are using the older approach (still valid, just different).

            ✅ Don’t mix them. Either:
                -Wrap with <BrowserRouter> + use <Routes> in App.jsx
                OR
                -Use createBrowserRouter() + <RouterProvider />    

*/

// 1. npm install react-router-dom
// 2. BrowserRouter as Router :- 
// 3. Routes
// 4. Route
// 5. Link :- used to navigate between different routes 
// 6. NavLink :- like Link but with active styling
// 7. useParams :- to access route parameters means for dynamic routing
// 8. useNavigate :- to programmatically navigate
// 9. Navigate :- to redirect users
// 10. Outlet
// 11. Custom 404 Page
// 12. Nested Routing
// 13. Index Routes
// 14. URL Search Params
// 15. Programmatic Navigation
// 16. Protected Routes (Auth)
// 17. Lazy Loading Routes (Code Splitting)
// 18. Route Transition Animations
// 19. Scroll Restoration
// 20. Query Parameters and State Management