import React from 'react';

export default function Hobbies(props) {
    console.log(props);
    return (
        <div>
            Hobbies:
            {props.hobbies.map((h, i) => <p key={i}>{h}</p>)}
        </div>
    )
}