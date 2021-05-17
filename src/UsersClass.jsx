import React, { Component } from 'react'

export class UsersClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
        };
    }

    // lifecycle call

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(users => {
            console.log("users:", users);
            this.setState({users: users});
        })
        .catch((err) => console.log(err));
    }
    render() {
        return (
            <div>
            <h1>Users Details</h1>
            <div>
                {this.state.users.map((users) =>
                <div>                    
                    <p style={{marginLeft:"10px"}}><strong>Name:</strong> {users.name}</p>
                    <p style={{marginLeft:"10px"}}><strong>Username:</strong> {users.username}</p>
                    <p style={{marginLeft:"10px"}}><strong>Email:</strong> {users.email} </p>
                    <hr />
                </div>                
                )}
            </div>
            <hr />
                
            </div>
        )
    }
}

export default UsersClass;


