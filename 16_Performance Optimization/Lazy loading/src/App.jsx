import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// component
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import Home from './Components/Home'

// Routes...
// import Homee from './Pages/Home'
// import About from './Pages/About'
// import Contack from './Pages/Contack'

// Component based code splitting
const Home = lazy(() => import ('./Components/Home'))
const Navbar = lazy(() => import ('./Components/Navbar'))
const Footer = lazy(() => import ('./Components/Footer'))

// Route based code splitting
const Homee = lazy(() => import ('./Pages/Home'))
const About = lazy(() => import ('./Pages/About'))
const Contack = lazy(() => import ('./Pages/Contack'))



function App() {


  return (
    <>

        {/* <Router>
            <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Homee />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contack />} />
                    </Routes>
        
            <Footer />
        </Router> */}

        <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Homee />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contack />} />
                </Routes>
            </Suspense>
    
        <Footer />
  
    </>
    )
}

export default App;

/* 
    ## ⁡⁢⁣⁣𝗟𝗮𝘇𝘆 𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁⁡

    Lazy loading is a technique that allows you to load components or modules only when they are needed, rather than loading everything upfront. This can improve the performance of your application by reducing the initial load time and optimizing resource usage.

    - Normally when you import a component, it is loaded immediately when the application starts. With lazy loading, you can defer the loading of a component until it is actually rendered in the UI.

    - React provides a built-in function called `lazy` that allows you to define a component as lazy-loaded. You can use it in combination with `Suspense` to handle the loading state while the component is being fetched.

    - Nrmarmly React app boundle all javascript into one big file. As a app grow boundle size become bigger and bigger. So, it take more time to load the app. But with lazy loading we can split the boundle into smaller chunks and load them on demand.

    Code Spliting:-
        = Load only the code that is needed for the current page or component.
        = Reduce the initial load time of the application.
        = Improve performance by loading resources on demand.

    Result:-
        -  Faster initial load time.
        -  Reduced bandwidth usage.
        -  Improved user experience.
        
    Type of Code Spliting:-
        - Route-based code splitting: Load components based on the route or URL.
        - Component-based code splitting: Load components when they are rendered in the UI.
        - Library-based code splitting: Load third-party libraries only when they are needed.  
        
        concept:
            - lazy():- This function is used to define a component as lazy-loaded. It takes a function that returns a dynamic import of the component. The component will be loaded only when it is rendered in the UI.

            - Suspense:- This component is used to wrap the lazy-loaded component. It takes a fallback prop that is rendered while the component is being loaded. Once the component is loaded, it will replace the fallback content.

            - Suspense:- This component is used to wrap the lazy-loaded component. It takes a fallback prop that is rendered while the component is being loaded. Once the component is loaded, it will replace the fallback content.
    
    */
