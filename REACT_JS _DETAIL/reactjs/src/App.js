import logo from './logo.svg';
import './App.css';
import React from 'react'
import Inputform from './Inputform';
import Toggle from './Toggle';
import Form from './Form';
import Array from './Array';
import Blist from './Blist';
import Narray from './Narray';
//functional components 
function App() {
  return (
    <div className="App">
      <Child name="components" />
      <h1>WELCOME TO REACT</h1>
      <Class />
      <Classed name="classed.props" />
      <Inputform/>
      <Toggle/>
      <Form/>
      <Array/>
      <Blist/>
      <Narray/>
    </div>
  );
}

//props in functional components
const Child = (props) => {
  return (
    <div>
      <h1>hello from child {props.name}</h1>
    </div>
  )
}

//class based component

class Class extends React.Component {
  render() {
    return (
      <h1>Hello from class component</h1>
    )
  }
}
//props in classs based component
class Classed extends React.Component {
  render() {
    return (
      <h1>Hello from class component {this.props.name}</h1>
    )
  }
}



export default App;