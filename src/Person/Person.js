import React from 'react';

const person = ( props ) => {
    return (
        <div style={{backgroundColor:'#EDEDED'}}>
            <p onClick={props.click}>I'm {props.name} and I am a {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;