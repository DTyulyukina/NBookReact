import React from 'react';
import PropTypes from 'prop-types';

class NewEvent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <span className={this.props.className} onClick={() => this.props.funcEvent(this.props.keyId)}>{this.props.valueDef}</span>
         );
    }
}

NewEvent.propTypes = {
    className: PropTypes.string.isRequired,
    valueDef: PropTypes.string,
    keyId: PropTypes.number,
    funcEvent: PropTypes.func
}

export default NewEvent;