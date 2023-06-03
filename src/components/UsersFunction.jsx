import axios from 'axios';
import React, {useState, useEffect} from 'react';


const UsersFunction = () => {
    let myUsers =[]
    const [users,SetUsers]= useState(myUsers);

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res);
            SetUsers(res.data)
        })
        .catch ((err)=>console.log(err))
    })
    return (
        <div>
            <h1>Functional Component</h1>
          {users.map((user)=>(
            <div>
                
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <hr/>
            </div>
          ))}  
        </div>
    );
}

export default UsersFunction;
