import React from 'react';

export default function Age(props) {
    return (
        <div>
            Age: <h3>{props.match.params.age}</h3>
        </div>
    )
}