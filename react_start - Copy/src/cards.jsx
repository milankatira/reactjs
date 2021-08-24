import react from "react";

function Card(props) {
    return (
      <>
        <div className='cards'>
          <div className='card'>
            <img src={props.imgSrc} target="_blank" alt="mypic" className="card-img"></img>
            <div className="card-info">
              <span className="card-catagory"> {props.title}</span>
              <h3 className="card-title">{props.sname}</h3>
              <a href={props.link} target="_blank">
                <button>Watch now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  };
  
export default Card;