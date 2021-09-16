import React from 'react';
import User from './User';
import Child from './Child'
//TODO constructor
class constructor extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "milan"
    }
    console.log('constructor')
  }
  render() {
    return (
      <div>
        <User />
        <h1>Hello World!{this.state.data} </h1>
      </div>
    )
  }

}

export default constructor;

//TODO render 

export function App() {

  const [Name, setName] = React.useState("Milan")
  console.log('render')
  return (
    <div>
      <h1>hello</h1>
      <User name={Name} />
      <button onClick={() => setName("katira")}>
        click here
      </button>
    </div>
  )
}
//TODO componentdid mount
export class Mount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "mount"
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>component did mount{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "katira" })}>
          click here
        </button>
      </div>
    )
  }
}

//TODO componentDidUpdate
export class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    console.log('constructor')
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.warn("componentDidUpdate", preState.count, this.state.count)
    if (preState.count === this.state.count) {
      alert("data already present")
    }
  }

  render() {

    console.log('render')
    return (
      <div>
        <h1>component did update{this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>
          click here
        </button>
      </div>
    )
  }
}

//TODO shouldcomponrntupdate
export class Supdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate() {
    console.log("should component update", this.state.count)
    return true
  }

  render() {

    return (
      <div>
        <h1>shouldcomponrntupdate {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>click</button>
      </div>
    )
  }
}

//TODO componentwillunmount

export class Unmount extends React.Component {

  constructor() {
    super()
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <div>
        <h1>unmount</h1>
        {
          this.state.show ? <Child /> : <h1>child remove</h1>
        }
        <button onClick={() => this.setState({ show: !this.state.show })}>toggle child</button>
      </div>
    )
  }
}