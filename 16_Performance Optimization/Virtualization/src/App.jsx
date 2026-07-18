

import './App.css'
import ReactVirtuoso from './Pages/ReactVirtuoso'
import WithoutLibrary from './Pages/WithoutLibrary'



function App() {

    const arr = Array.from({ length: 1000000 }, (_, i) => i + 1)
    // console.log(arr)

  return (
        <>
            <h1>Virtualization</h1>

            {/* <h1>Without using Virtualization library</h1> */}
            {/* <WithoutLibrary list={arr} height={300} itemHeight={20} /> */}

            <h1>Using Virtualization library</h1>
            <ReactVirtuoso list={arr} />
        </>
    )
}

export default App


/*  
    ## ⁡⁢⁣⁣𝗩𝗶𝗿𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻⁡

    Problem:
    * Rendering a large list of items can lead to performance issues, as the browser has to create and manage a large number of DOM nodes.

    • When you have a long list of items to render in a web application, it can cause performance issues. Here's a more detailed explanation of the problem in simple terms:

    - ⁡⁣⁢⁣𝗥𝗲𝗻𝗱𝗲𝗿𝗶𝗻𝗴 𝗮𝗹𝗹 𝗶𝘁𝗲𝗺𝘀 𝗮𝘁 𝗼𝗻𝗰𝗲:⁡ When you render a long list of items, the browser needs to create HTML elements for each item. This process is called rendering. The browser has to create and render all the elements in the list, which can be time-consuming and resource-intensive.

    - ⁡⁣⁢⁣𝗦𝗹𝗼𝘄 𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝘁𝗶𝗺𝗲𝘀:⁡ When the browser is rendering a long list of items, it takes time to complete the rendering process. This can result in slow loading times for your web application. Users may have to wait for a long time to see the content they are expecting, which can lead to frustration.

    - ⁡⁣⁢⁣𝗣𝗼𝗼𝗿 𝘂𝘀𝗲𝗿 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲:⁡ Slow loading times can negatively impact the user experience. Users may abandon the page or lose interest if they have to wait too long to see the content they want. This can result in a higher bounce rate and lower engagement on your web application.

    - ⁡⁣⁢⁣𝗕𝗿𝗼𝘄𝘀𝗲𝗿 𝗰𝗿𝗮𝘀𝗵𝗲𝘀:⁡ In some cases, rendering a very large number of items can cause the browser to crash or become unresponsive. This can happen when the browser runs out of memory or resources while trying to render the entire list. This can lead to a poor user experience and potentially lose data or cause the user to lose progress.

    - To address this issue, you can use techniques such as virtualization, lazy loading, and pagination to render a long list of items efficiently. These techniques allow you to render only the visible items on the screen and load more items as the user scrolls or interacts with the list. This reduces the initial rendering time and improves the performance of your web application.



    ⁡⁣⁢⁣𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻⁡:
    * Virtualization is a technique that only renders the items that are currently visible in the viewport, improving performance by reducing the number of DOM nodes.

    Libraries:
    - react-window
    - react-virtualized

    <!-- Documentation -->
    https://dev.to/adamklein/build-your-own-virtual-scroll-part-i-11ib
    # Virtualization Libraries: -
    - React Virtuoso (Recommended)
    - React Window
*/
