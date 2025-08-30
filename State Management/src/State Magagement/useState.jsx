import React from 'react'

function useState() {
  return (
    <div>useState</div>
  )
}

export default useState;


/* 
    # Details Information

    1. State Management in React (Data Management)

        - State is data that changes over time in your React components.
        - When state changes, React re-renders the component (or part of it) to reflect the new data.

        * Props → external data passed into a component (read-only).
        * State → internal data owned by the component (mutable through React methods).


    2. useState Hook
        - The useState hook is a fundamental part of managing state in functional components.
        - It allows you to add state to your components without converting them to class components.
        - The useState hook returns an array with two elements: the current state value and a function to update it.
*/