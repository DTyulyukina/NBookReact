import React from 'react';
import PropTypes from 'prop-types';

class NewEvent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let newStyle = {
            top: this.props.topEvent + 'px',
            left: this.props.leftEvent + 'px',
            backgroundColor: this.props.color,
            width: '95%',
            minHeight: '15px'
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
}

NewEvent.propTypes = {
    topEvent: PropTypes.number.isRequired,
    leftEvent: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default NewEvent;