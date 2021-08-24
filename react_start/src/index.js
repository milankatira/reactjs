//importing a module
import React from 'react';
import ReactDOM from 'react-dom'; //for dom manipulation
//import css
import './index.css'
//importing a heading components
import Heading from './heading'
//import App from './App';

// react dom take 3 parameters 
// 1.what to shown
// 2.where to show 
// 3.callback function

//root is elements id in public/index.html file and here we are writing hello world inside this html file 
//ReactDOM.render(<h1>hello world!</h1>,document.getElementById("root"));

//multiple jsx in one div tag 

ReactDOM.render(
  <>
  <h1>hello world!</h1>
  <p>milan</p>
  </>,
  document.getElementById("root"));


//also we can render jsx element in array format

ReactDOM.render(
  [
  <h1>hello world!</h1>,
  <p>milan</p>,
  ],
  document.getElementById("root"));


// javasript inside jsx 
//also we are used template literals 
const intro = "hello ";
const links = "https://www.youtube.com"

const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
const img3 = "https://picsum.photos/200/300/?blur";

const para={
  color:'black#fa9191',
  textAlign:'center',
}


ReactDOM.render(
  <>
    <h1 className="name">hello world!</h1>

{/* ---inline css---
    <p style={{ color:'black#fa9191',
  textAlign:'center',}}>{intro}milan</p>

--pass class 
<p style={para}>{intro}milan</p>

    <h1>{`${intro}milan`}</h1> */}

    {/* <div className="img_div">
      <img src={img1} alt="randomimage" />
      <img src={img2} alt="randomimage" />
      <a href={links} target="_blank">
      <img src={img3} alt="randomimage" />
      </a>
    </div>
  </>,
  document.getElementById("root")); */}

  <h1>my name is milan</h1>

  {/* component calling */}
 <Heading> </Heading>
  <ol>
    <li>js</li>
    <li>python</li>
    <li>mern</li>
    <li>php</li>
  </ol>
</>,
document.getElementById("root"));
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/