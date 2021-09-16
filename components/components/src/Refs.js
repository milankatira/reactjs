import React, { createRef } from 'react';

class Ref extends React.Component {
    constructor() {
        super();
        this.inputRef = createRef();
    }
    
    componentDidMount() {
    
    console.warn(this.inputRef.current.value="1000")
    }
    render() {
        return (
            <div>
                <h1>use refs</h1>

                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }

}

export default Ref