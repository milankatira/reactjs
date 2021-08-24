import React from "react";
import ReactDom from "react-dom";
import Card from "./cards.jsx";
import "./main.css"
ReactDom.render(
  <>
  <h1 className="heading">list of top 5 netflix in 2021</h1>
    <Card
      imgSrc="https://wallpapercave.com/wp/wp4056398.png"
      title="A netflif original series"
      sname="dark"
      link="https://www.netflix.com/in/title/80100172"
    />

    <Card
      imgSrc="https://wallpapercave.com/wp/wp4056398.png"
      title="A netflif original series"
      sname="dark"
      link="https://www.netflix.com/in/title/80100172"
    />

    <Card
      imgSrc="https://wallpapercave.com/wp/wp4056398.png"
      title="A netflif original series"
      sname="dark"
      link="https://www.netflix.com/in/title/80100172"
    />

  </>,
  document.getElementById('root'));