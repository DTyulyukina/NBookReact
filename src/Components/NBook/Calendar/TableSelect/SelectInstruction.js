import React from 'react';

function HeaderInstruction(props){
    let count = 7;
    return <th colSpan={count}>Select {props.name}</th>;
};

export default HeaderInstruction;