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
            <h1 style={{marginLeft:"30px"}}><u>Users Details</u></h1>
            <div>
                {this.state.users.map((users) =>
                <div>                    
                    <p style={{marginLeft:"30px"}}><strong>Name:</strong> {users.name}</p>
                    <p style={{marginLeft:"30px"}}><strong>Username:</strong> {users.username}</p>
                    <p style={{marginLeft:"30px"}}><strong>Email:</strong> {users.email} </p>
                    <hr  style={{marginLeft: '30px', marginRight: '500px'}} />
                </div>                
                )}
            </div>
            <hr />
                
            </div>
        )
    }
}

export default UsersClass;


