import React, { useState } from 'react'

const Inputform = () => {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false)

    function getData(val) {
       // console.log(val.target.value)
        setData(val.target.value)
    }
    return (
        <div>
        {
        print?
        <h1>{data}</h1>:null
        }
            <input type="text" onChange={getData}></input>
            <br/>
            <button onClick={()=>setPrint(true)}> print data</button>
        </div>
    )
}

export default Inputform;
