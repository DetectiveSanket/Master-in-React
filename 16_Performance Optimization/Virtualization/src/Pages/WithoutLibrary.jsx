import React from 'react'

function WithoutLibrary({ list, height, itemHeight }) {
    
    // Calculate the number of items that can fit in the viewport
    const visibleItemCount = Math.ceil(height / itemHeight)
    // console.log(visibleItemCount)
    
    const [startIndex, setStartIndex] = React.useState([0 , visibleItemCount])

    // Calculate the visible items based on the start index and the number of visible items
    const visibleItems = list.slice(startIndex[0], startIndex[1])
    // console.log(visibleItems)

    // State to keep track of the start index of the visible items

    // Handle scroll event to update the start index of the visible items
    const handleScroll = (e) => {
        // Get the scroll position
        const scrollTop = e.target.scrollTop;

        // new starting index..
        const newStartIndex = Math.floor(scrollTop / itemHeight)

        // Calculate the end index based on the new starting index and the number of visible items
        const endIndex = newStartIndex + visibleItemCount

        // Update the state with the new starting index and end index
        setStartIndex([newStartIndex, endIndex])
    }

    return (
        <div
            style={{
                
            }}
        >
            <h1>Without using Virtualization library Item are below......</h1>

            <div
                style={{
                    height:height,
                    overflowY: 'auto',
                    border: '1px solid black',
                    backgroundColor: 'orange',
                }} onScroll={handleScroll}
            >
                <div
                    style={{
                        height:list.length * itemHeight,
                    }}
                >
                    <div
                        style={{
                            transform: `translateY(${startIndex[0] * itemHeight}px)`,

                        }}
                    >
                        {
                            visibleItems.map((item) => {
                                return (
                                    <p
                                        style={{
                                            height:itemHeight,
                                            color:'red',
                                            fontSize:'20px',
                                            borderBottom:'1px solid black',
                                            padding:'0 0 20px 0',
                                        }}

                                        key={item}
                                    >
                                        Item {item}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithoutLibrary;