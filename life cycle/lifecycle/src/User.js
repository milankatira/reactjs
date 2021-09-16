import React from 'react';

class User extends React.Component {
    render() {
        console.warn("user",this.props)
        return (
            <h1>Welcome</h1>
        )
    }
}

export default User