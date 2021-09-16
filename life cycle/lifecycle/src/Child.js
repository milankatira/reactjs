import React from 'react'

class Child extends React.Component {
    componentWillMount() {
        alert("unmounting")
        }
        
    render() {

        return (
            <div>
                <h1>Child</h1>
            </div>)
    }
}

export default Child