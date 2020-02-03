import React from 'react';
import PropTypes from 'prop-types';

function FormTex(props){
    const array = props.hourDay; 
    let array_form = array.map((hour) => {
        return (
        <React.Fragment key={hour} >
            <div className="hoursoftext"></div>
            <div className="hoursoftext"></div>
        </React.Fragment>
        )
    })
    
    return array_form;
}

FormTex.propTypes = {
    hourDay: PropTypes.array.isRequired
}

export default FormTex;