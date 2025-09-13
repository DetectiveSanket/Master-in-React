
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

*/

// 1. npm install react-router-dom
// 2. BrowserRouter as Router
// 3. Routes
// 4. Route
// 5. Link
// 6. NavLink
// 7. useParams
// 8. useNavigate
// 9. Navigate
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