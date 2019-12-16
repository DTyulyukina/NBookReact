import React, {useState}   from 'react';
import moment              from 'moment';
import PropTypes           from 'prop-types';
import ContainerEvents     from './ContainerEvents'

import './DailyTimetable.scss';

export default class DailyTimetable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment()
        }

        this.AddDay       = this.AddDay.bind(this);
        this.AddDayНоurs  = this.AddDayНоurs.bind(this);
        this.AddTextForm  = this.AddTextForm.bind(this);
    }

    hourDaysArrays(){
        let array = [];
        for(let i=7; i<23; i++){
            array[i] = i + 1;
        }
        return array;
    }

    updateDate(event, status){
        let dateObject = Object.assign({}, this.state.date);
        if(status === 'prev') {
            dateObject = moment(dateObject).subtract(1, "day");
        } else
        if(status === 'last') {
            dateObject = moment(dateObject).add(1, "day"); 
        } else {
            dateObject = moment();
        }
        this.setState({
            date: dateObject
        })
        event.preventDefault();
    }

    AddDay(){
        return (
            <div className='day'>
                <div className="arrow left" onClick={(e) => this.updateDate(e, 'prev')}/>
                <div id='number-day'> { this.state.date.format("D") } </div>
                <div id='attr-day'>
                    <div id='day-of-week'> { this.state.date.format("dddd") } </div>
                    <div id='month-day'> { this.state.date.format("MMMM") } </div>
                    <div id='year-day'> { this.state.date.format("Y") } </div>
                </div>
                <div className="arrow right" onClick={(e) => this.updateDate(e, 'last')}/>
            </div>
        );
    }

    AddDayНоurs(props){
        const array = props.hourDay; 
        let array_days = array.map((hour) => {
            return <div key={ 'hour' + hour } className="hoursofday" rowSpan="2">{hour}</div>
        })
        return array_days;
    }

    AddTextForm(props){
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

    AddTimeTable(props){   
        return (
           <div className="DailyTimetable">
            <div className='hours'>
               { props.dHours }
            </div>  
            <div className='texts'>
               { props.dForm }
               { props.dEvent }
            </div>
         </div>   
        );
    }

    render() {
        let hour = this.hourDaysArrays();
        return (
            <div className='content'>
                <div className='days'>     
                  <this.AddDay /> 
                  <this.AddTimeTable dHours = { <this.AddDayНоurs hourDay={hour}/>}
                                     dForm  = { <this.AddTextForm hourDay={hour}/>} 
                                     dEvent = { <ContainerEvents/> }/>
                </div>   
            </div>
        );
    }
}

DailyTimetable.propTypes = {
    date:           PropTypes.object,
    fileData:       PropTypes.object,
    componentEvent: PropTypes.object,

    dHours: PropTypes.object,
    dForm:  PropTypes.object,
    dEvent: PropTypes.object
};








