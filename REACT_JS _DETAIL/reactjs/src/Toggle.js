import React from 'react'

const Toggle = () => {
const [status,setstatus]=React.useState(false)
    return (
        <div>
        {
        status?<h1>toggle</h1>:null
        }
           <button onClick={()=>(setstatus(false))}>hide</button>
           <br/>
           <br/>
           <button onClick={()=>(setstatus(true))}>show </button>
        </div>
    )
}

export default Toggle
