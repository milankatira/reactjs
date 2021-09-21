import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'

const Blist = () => {
    const detail = [
        { name: "milan", email: "milan@gmail.com", contact: "858585" },
        { name: "miln", email: "mil@gmail.com", contact: "8585" },
        { name: "mila", email: "mil@gmail.com", contact: "8585" },
    ]
    return (
        <div>
            <br />
            <Table striped variant="success" >
                <tbody>
                    <tr>
                        <td>sr no</td>
                        <td>name</td>
                        <td>email</td>
                        <td>contact</td>
                    </tr>
                    {
                        detail.map((DATA, i) =>
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{DATA.name}</td>
                                <td>{DATA.email}</td>
                                <td>{DATA.contact}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Blist
