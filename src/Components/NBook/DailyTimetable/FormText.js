import React from 'react';
import PropTypes from 'prop-types';
import ContainerEvents  from './ContainerEvents';

function FormTex(props){
    const array = props.hourDay; 
    let array_form = array.map((hour) => {
        return (
        <React.Fragment key={hour} >
            <div className="hoursoftext">{<ContainerEvents key={hour} id={hour} dates={props.day}/>}</div>
            <div className="hoursoftext">{<ContainerEvents key={hour + 0.5} id={hour + 0.5} dates={props.day}/>}</div>
        </React.Fragment>
        )
    })
    
    return array_form;
}

FormTex.propTypes = {
    day: PropTypes.object.isRequired,
    hourDay: PropTypes.array.isRequired
}

export default FormTex;