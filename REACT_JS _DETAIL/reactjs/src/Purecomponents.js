import React from 'react'
import Counter from './Counter'
class Pure extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <Counter count={this.state.count} />
                <button
                    onClick={() => { this.setState({ count: this.state.count + 0 }) }}
                >Update Count</button>
            </div>
        );
    }
}

export default Pure;