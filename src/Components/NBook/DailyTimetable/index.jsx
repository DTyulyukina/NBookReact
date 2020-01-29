import React               from 'react';
import moment              from 'moment';

import ContainerEvents  from './ContainerEvents';
import DateNowHeader    from './DateNowHeader';
import DayHours         from './DayHours';
import FormText         from './FormText';

import './DailyTimetable.scss';

export default class DailyTimetable extends React.Component {
    constructor() {
        super();

        this.state = {
            date: moment()
        };

        this.updateDate  = this.updateDate.bind(this);
    }

    updateDate(event, status){
        event.preventDefault();
        let dateObject = Object.assign({}, this.state.date);
        if(status === "prev") {
            dateObject = moment(dateObject).subtract(1, "day");
        } else
        if(status === "last") {
            dateObject = moment(dateObject).add(1, "day"); 
        }
        this.setState({date: dateObject});
    }

    hourDaysArrays(){
        let array = [];
        for(let i=7; i<22; i++){
            array[i] = i + 1;
        }
        return array;
    }

    render() {
        return (
            <div className='content'>
                <div className='days'>     
                  <DateNowHeader 
                   day = {this.state.date} 
                   buttomLastPrev = {this.updateDate} 
                  /> 

                  <div className="DailyTimetable">
                    <div className='hours'>
                      { <DayHours hourDay={this.hourDaysArrays()}/> }
                    </div>  
                    <div className='texts'>
                      { <FormText hourDay={this.hourDaysArrays()}/>}
                      { <ContainerEvents 
                         dates={this.state.date}/> }
                    </div>
                  </div> 
                </div>   
            </div>
        );
    }
}








