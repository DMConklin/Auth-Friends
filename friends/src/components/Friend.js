import React from 'react';

const style = {
    border: 'solid 1px black',
    width: '25%',
    margin: '0 auto',
    marginTop: '15px'
}

const Friend = props => {
    return(
        <div style={style}>
            <h2>{props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend;