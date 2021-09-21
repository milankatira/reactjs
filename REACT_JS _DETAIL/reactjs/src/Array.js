import React from 'react'

const Array = () => {
//    const student = ["milan", "katira", "jaydeep", "react"]
    const detail = [
        { name: "milan", email: "milan@gmail.com", contact: "858585" },
        { name: "miln", email: "mil@gmail.com", contact: "858585" },
        { name: "mila", email: "mil@gmail.com", contact: "858585" },
    ]
    return (
        <div>
            <br />
            <table border="50" >
                <tbody>
                    {
                        detail.map((DATA, i) =>
                            <tr key={i} >
                                <td>{DATA.name}</td>
                                <td>{DATA.email}</td>
                                <td>{DATA.contact}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {/* {
                student.map((data) =>
                    <h1>{data}</h1>)
            } */}
        </div>
    )
}

export default Array
