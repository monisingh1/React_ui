import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./user.css"
import axios from 'axios'

const User = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8005/api/getAll")
            setUsers(response.data)
        }
        fetchData()
    }, [])


    return (
        <div className='userTable'>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td> {user.name}</td>
                                    <td> {user.email}</td>
                                    <td>{user.address}</td>
                                    <td className='action'>
                                        <Link to={'/edit/'+user._id}><i className="fa-regular fa-pen-to-square"></i></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

        </div>
    )
}

export default User