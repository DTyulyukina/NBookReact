import React from 'react';

import Button from './Button';

function Form(props){ 
    const style = {
        width: '100%',
        display: 'flex',
        justifyСontent: 'flex-start',
        padding: '5px',
    }
    switch(props.typeForm){
        case "edit": 
            return (
                <form style={style}>
                    <input type="text" name="text" value={props.text}/>
                    <Button index={props.id} type="save" nameCss="icon-notes" action={props.onSave}/>
                </form>
            );
    }
}

export default Form; 