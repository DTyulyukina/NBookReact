import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

import HeaderInstruction from './HeaderInstruction';

const weekdays = moment.weekdays(true);

class Headers extends React.Component {
    static propTypes ={
        yearBool: PropTypes.bool.isRequired,
        monthBool: PropTypes.bool.isRequired
    }

    constructor(props){ 
        super(props);
    }

    render(){
        let weekdaysname = weekdays.map((name) => {
            return <th key={name} className="week-day">{ name }</th>;
        });
        return (
            <tr>
               { ( this.props.yearBool ? <HeaderInstruction name="year"/> : 
                 ( this.props.monthBool ? <HeaderInstruction name="mounth"/> : weekdaysname ))}
            </tr>
          );
    }
}

export default Headers;