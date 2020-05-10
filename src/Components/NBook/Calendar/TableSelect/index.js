import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';

import HeaderInstruction from './SelectInstruction';

class Headers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weekdaysname: []
        }
    }

    componentDidMount(){
        const weekdays = moment.weekdays(true);
        let arrayNameDay = [];
        weekdays.map((name) => {
            arrayNameDay.push(<th key={name} className="week-day">{ name }</th>);
            return console.log('load week day');
        });
        this.setState({
            weekdaysname: arrayNameDay
        });
    }

    componentWillUnmount(){
        this.setState({
            weekdaysname: []
        });
    }
    
    render(){
        return (
            <tr>
                { ( this.props.yearBool ? <HeaderInstruction name="year"/> : 
                  ( this.props.monthBool ? <HeaderInstruction name="mounth"/> : this.state.weekdaysname ))}
            </tr>
        );
    }
}

Headers.propTypes ={
    yearBool: PropTypes.bool.isRequired,
    monthBool: PropTypes.bool.isRequired
}

export default Headers;