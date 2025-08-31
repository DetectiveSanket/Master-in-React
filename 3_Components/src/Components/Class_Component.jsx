import React, { Component } from 'react';

class Class_Component extends Component {
    // The constructor is where you initialize state

    constructor(props) {
        super(props);
        this.state = {
            message: 'This msg from inside Class Component'
        };
    }

    // The render method is required and returns the UI
    render() {
        return (
            <>
                <h1 style={{ color: 'orange' }}>Class_Component</h1>

                <p style={{ color: 'cyan' }}> {this.state.message} </p>
                <p style={{ color: 'cyan' }}> {this.props.message} </p>

            </>
        );
    }
}

export default Class_Component;

/*
⁡⁢⁣⁣Readable summary: Functional vs Class Components⁡

- Syntax
    - Functional: function Component() {}
    - Class: class Component extends React.Component {}

- State
    - Functional: Managed with the useState() hook.
    - Class: Managed with this.state and updated via this.setState().

- Lifecycle / Side Effects
    - Functional: 	Managed with the useEffect() hook for side effects.
    - Class: use Lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount

- Props
    - Functional: received as function ⁡⁣⁣⁢arguments (props) ⁡or destructured
    - Class: accessed via ⁡⁣⁣⁢this.props⁡

- "this" keyword
    - Functional: not used
    - Class: used; methods may require binding

- Modernity
    - Functional: modern, recommended, most common
    - Class: legacy, still found in older codebases
*/