
import React from 'react'
import Student from './heading';
import Heading from './heading';
//no need to write import react 
//but for used .react we need to import it 

//functional component
 
//make sure that all tag is inside the div tag because rect render only one components 

//here in the placeof div of section tag we are use react fragment

const App = () => {
  return (
   // <React.Fragment>==<>

   //--rule of jsx--

   //class==className --rule of jsx(camelCase)
   //close all tag    
   //use camelcase in attributes
   
//nested components myname inside app(function name must be start with capital and also camelcase)
//we can function multiple time
   <>
   <MyName />

     <h1 className="myclass"> Welcome to react</h1>
     <Heading/>
     <MyName />  
      <p>Hello {3+7}</p>
     <Student/>
   </>
  )
}

const MyName = () => {
  return <h1>milan katira</h1>;
};

export default App;


// function App(){
//   return <h1>hello</h1>;
// }
