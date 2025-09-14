import React from 'react'

function Bug() {
    throw new Error("Something went wrong!");
    return <p>This will never render</p>; // This line will never be reached. due to it react app will crash
}

function BuggyComponent() {
  return (
        <div>
            <h4>Buggy Component</h4>
            <Bug /> {/* This will throw an error */}
        </div>

        // Without error boundaries, this breaks your entire UI.
        // With error boundaries, you can show a friendly message like:
        // “Oops! Something went wrong. Please try again.”
    )
}

export default BuggyComponent