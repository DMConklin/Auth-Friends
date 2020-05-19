import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../auth/axiosAuth'
import Friend from './Friend';

const Protected = () => {
    const [update, setUpdate] = useState(true);
    const [friends, setFriends] = useState([]);
    const [toAdd, setToAdd] = useState({
        name: '',
        age: '',
        email: ''
    })

    useEffect(() => {
        if (update) {
            setUpdate(false);
            axiosWithAuth()
                .get('/friends')
                .then(res => setFriends(res.data))
                .catch(err => console.log(err));
        }
    }, [update])
    

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', toAdd)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setUpdate(true);
    }

    const handleChange = e => {
        e.target.name === 'age' ? 
        setToAdd({ ...toAdd, [e.target.name]: parseInt(e.target.value, 10) }) : 
        setToAdd({ ...toAdd, [e.target.name]: e.target.value })
    }

    return(
        <div>
            <h1>Friends List</h1>
            <form onSubmit={addFriend}>
                <input type="text" name="name" value={toAdd.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="age" value={toAdd.age} onChange={handleChange} placeholder="Age" />
                <input type='text' name="email" value={toAdd.email} onChange={handleChange} placeholder="Email" />
                <button>Add Friend</button>
            </form>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    )
}

export default Protected;