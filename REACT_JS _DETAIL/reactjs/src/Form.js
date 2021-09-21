import React,{ useState} from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");
    function getFormData(e) {
        console.warn(name, tnc, interest)
        e.preventDefault()
    }
    return (
        <div>
            <h1>form in react js</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select> <br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
                <button>Clear</button>
            </form>
        </div>
    )
}

export default Form
