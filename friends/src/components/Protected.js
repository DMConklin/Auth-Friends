import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Friend from './Friend';

const Protected = () => {
    const token = localStorage.getItem('token');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/friends', {
                headers: { 
                    Authorization: token 
                }
            })
            .then(res => setFriends(res.data))
            .catch(err => console.log(err));
    }, [token])

    return(
        <div>
            <h1>Friends List</h1>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    )
}

export default Protected;