import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

import HeaderInstruction from './HeaderInstruction';

const weekdays = moment.weekdays(true);

class Headers extends React.Component {
    static propTypes ={
        yearBool: PropTypes.bool.isRequired,
        mounthBool: PropTypes.bool.isRequired
    }

    constructor(props){ 
        super(props);

        this.state = {
            yBool: props.yearBool, 
            mBool: props.monthNow
        };
    }

    render(){
        let weekdaysname = weekdays.map((name) => {
            return <th key={name} className="week-day">{ name }</th>;
        });

        return (
            <tr>
               {( this.state.yBool && <HeaderInstruction name="year"/> ) || 
                ( this.state.mBool && <HeaderInstruction name="mounth"/> ) || weekdaysname}
            </tr>
          );
    }
}

export default Headers;