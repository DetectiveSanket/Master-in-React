import React, { lazy, Suspense } from 'react'
import Loadding from './Loadding';


// import Hero from './Hero'
// import Design from './Design'
// import Cycle from './Cycle'

// Component based code splitting
const Hero = lazy(() => import ('./Hero'));
const Design = lazy(() => import ('./Design'));
const Cycle = lazy(() => import ('./Cycle'));


function Home() {
  return (
        <div>
            <h1>HOme page that show all the Details</h1>

            <Suspense fallback={<Loadding />}>
                <Hero />
            </Suspense>

            {/* 
                - ⁡⁣⁢⁣suspense⁡ is used to wrap the component that we want to lazy load. It takes a fallback prop that is rendered while the component is being loaded.⁡ 

                - In this example, while the `Hero` component is being loaded, the `Loadding` component will be displayed. Once the `Hero` component is loaded, it will replace the fallback content.

                - You can use `Suspense` to wrap any component that you want to lazy load, and it will handle the loading state for you. This allows you to improve the performance of your application by only loading components when they are needed.

                - ⁡⁣⁢⁣fallback⁡ can be any React element, such as a spinner, a loading message, or a placeholder component. It provides a better user experience by giving feedback to the user while the content is being loaded.
            */}

             <Suspense fallback={<Loadding title={"Design"} />}>
                <Design />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Cycle />
            </Suspense>   
            
        </div>
    )
}

export default Home