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

                <p style={{ color: 'cyan' }}> {this.state.message} </p> //? accessing state in class component
                <p style={{ color: 'cyan' }}> {this.props.message} </p> //? accessing props in class component (from parent) 

            </>
        );
    }
}

export default Class_Component;

/*
⁡⁢⁣⁣Readable summary: Functional vs Class Components⁡

- ⁡⁣⁢⁣𝗦𝘆𝗻𝘁𝗮𝘅⁡
    - Functional: function Function_Name() {}
    - Class: class Component_Name extends React.Component {}

- ⁡⁣⁢⁣𝗦𝘁𝗮𝘁𝗲⁡
    - Functional: Managed with the useState() hook.
    - Class: Managed with ⁡⁣⁣⁢this.state⁡ and updated via ⁡⁣⁣⁢this.setState()⁡.

- ⁡⁣⁢⁣𝗟𝗶𝗳𝗲𝗰𝘆𝗰𝗹𝗲 / 𝗦𝗶𝗱𝗲 𝗘𝗳𝗳𝗲𝗰𝘁𝘀⁡
    - Functional: Managed with the ⁡⁣⁣⁢useEffect() ⁡hook for side effects.
    - Class: use Lifecycle methods: ⁡⁣⁣⁢componentDidMount, componentDidUpdate, componentWillUnmount⁡

- ⁡⁣⁢⁣𝗣𝗿𝗼𝗽𝘀⁡
    - Functional: received as function ⁡⁣⁣⁢arguments (props) ⁡or ⁡⁣⁣⁢destructured⁡
    - Class: accessed via ⁡⁣⁣⁢this.props⁡

- ⁡⁣⁢⁣"𝘁𝗵𝗶𝘀" 𝗸𝗲𝘆𝘄𝗼𝗿𝗱⁡
    - Functional: not used
    - Class: used; methods may ⁡⁣⁣⁢require binding⁡

- ⁡⁣⁢⁣𝗠𝗼𝗱𝗲𝗿𝗻𝗶𝘁𝘆⁡
    - Functional: modern, recommended, most common
    - Class: legacy, still found in older codebases
*/