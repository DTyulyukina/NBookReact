import React from 'react';
import PropTypes from 'prop-types';

function AddEvent(props){
    let containerText = document.getElementsByClassName('texts')[0].children;
    let coordX;
    for( let index=0; index < containerText.length; index++) {
        let y = props.topEvent - containerText[index].getBoundingClientRect().top;
        if( 0 < y && y < 20 ) { 
           coordX = containerText[index].getBoundingClientRect().top - props.rect.top;
        }
    }
    let newStyle = {
        top: coordX + 'px',
        left: props.leftEvent + 'px',
        backgroundColor: props.color,
        width: '95%',
        minHeight: '20px'
    };
    return (
        <div className="new-events" style={newStyle}>
            <span className="titel"></span>
            <span className="text"></span>
            <span className="pencil">&#9998;</span>
            <span className="cross">&times;</span>
        </div>
    );
}

AddEvent.propTypes = {
    hourDay: PropTypes.array.isRequired
}

export default AddEvent;