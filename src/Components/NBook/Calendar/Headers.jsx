import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';

import HeaderInstruction from './HeaderInstruction';

function Headers(props) {
    const weekdays = moment.weekdays(true);
    let weekdaysname = weekdays.map((name) => {
        return <th key={name} className="week-day">{ name }</th>;
    });
    return (
        <tr>
            { ( props.yearBool ? <HeaderInstruction name="year"/> : 
              ( props.monthBool ? <HeaderInstruction name="mounth"/> : weekdaysname ))}
        </tr>
    );
}

Headers.propTypes ={
    yearBool: PropTypes.bool.isRequired,
    monthBool: PropTypes.bool.isRequired
}

export default Headers;