import React from 'react';
import PropTypes from 'prop-types';

function AddDayНоurs(props){
    let array = props.hourDay;
    let array_days = array.map((hour) => {
        return <div key={ 'hour' + hour } className="hoursnum" rowSpan="2">{hour}</div>
    })
    return array_days;
}

AddDayНоurs.propTypes = {
    hourDay: PropTypes.array.isRequired
}

export default AddDayНоurs;