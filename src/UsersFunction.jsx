import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const UsersFunction =() => {
    let myusers = [];
    const [users, setUsers] = useState(myusers);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res);
            setUsers(res.data)
        })
        .catch((err) => console.log(err));
    })


 

    return (
        <div>
            <h1 style={{marginLeft:"30px"}}><u>Users Details - Using Lifecycle Hooks (useEffect)</u></h1>
            <div>
                {users.map((users) =>
                
                    <div>
                        <p style={{marginLeft:"30px"}}><strong>Name:</strong> {users.name} </p>
                        <p style={{marginLeft:"30px"}}><strong>Username:</strong> {users.username} </p>
                        <p style={{marginLeft:"30px"}}><strong>Email:</strong> {users.email} </p>

                        <hr />

                    </div>
                 )}
            </div>
        </div>
    )
}

export default UsersFunction;
