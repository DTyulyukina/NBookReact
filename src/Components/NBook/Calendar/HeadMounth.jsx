import React from 'react';
import PropTypes from 'prop-types';

class HeadMounth extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            yBool: props.yearBool, 
            mBool: props.monthNow,
            mData: props.mounth
        };
    }
    render(){
        let col = this.state.mBool ? 2 : (this.state.yBool ? 3 : 5);
        return (
            <tr className="name-month">
                <th className="arrow left" />
                <th colSpan={col}>
                    { this.state.mData }
                </th>
                <th className="arrow right" />
            </tr>
        )
    }
} 

HeadMounth.propTypes ={
    yearBool: PropTypes.bool.isRequired,
    mounthBool: PropTypes.bool.isRequired,
    mounth: PropTypes.string.isRequired
}

export default HeadMounth;