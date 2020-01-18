import React from 'react';

const count = 7;

function HeaderInstruction(props){
    return <th colSpan={count}>
            Select {props.name}
           </th>;
};

export default HeaderInstruction;