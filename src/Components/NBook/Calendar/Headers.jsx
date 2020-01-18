import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

import HeaderInstruction from './HeaderInstruction';

const weekdays = moment.weekdays(true);

class Headers extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            yBool: props.yearBool, 
            mBool: props.monthNow
        };
    }

    render(){
        let weekdaysname = weekdays.map((nday) => {
            return <th key={nday} className="week-day">{ nday }</th>;
        });

        return (
            <tr>
               {( this.state.yBool && <HeaderInstruction name="year"/> ) || 
                ( this.state.mBool && <HeaderInstruction name="mounth"/> ) || weekdaysname}
            </tr>
          );
    }
} 

Headers.propTypes ={
    yearBool: PropTypes.bool.isRequired,
    mounthBool: PropTypes.bool.isRequired
}

export default Headers;