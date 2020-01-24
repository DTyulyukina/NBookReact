import React               from 'react';
import moment              from 'moment';
import PropTypes           from 'prop-types';

import ContainerEvents  from './ContainerEvents';
import DateNowHeader    from './DateNowHeader';

import './DailyTimetable.scss';

export default class DailyTimetable extends React.Component {
    constructor() {
        super();

        this.state = {
            date: moment()
        };

        this.updateDate  = this.updateDate.bind(this);
        this.AddDayНоurs = this.AddDayНоurs.bind(this);
        this.AddTextForm = this.AddTextForm.bind(this);
    }

    hourDaysArrays(){
        let array = [];
        for(let i=7; i<23; i++){
            array[i] = i + 1;
        }
        return array;
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
                  <DateNowHeader 
                   day = {this.state.date} 
                   buttomLastPrev = {this.updateDate} 
                  /> 

                  <this.AddTimeTable dHours = { <this.AddDayНоurs hourDay={hour}/>}
                                     dForm  = { <this.AddTextForm hourDay={hour}/>} 
                                     dEvent = { <ContainerEvents dates={this.state.date}/> }/>
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








