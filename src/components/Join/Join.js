import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    function handleNameEvent(event) {
        setName(event.target.value);
    }
    function handleRoomEvent(event) {
        setRoom(event.target.value);
    }
    

    return (
        <div className="joinOuterContainer">
            <div className="header">
                <h1>Join the Community</h1>
                <h4>Meet new people</h4>
                <h2>Socialise</h2>
            </div>
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={handleNameEvent} required /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={handleRoomEvent} /></div>

                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
