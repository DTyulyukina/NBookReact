import React from 'react';
import PropTypes from 'prop-types';
import ContainerEvents  from './ContainerEvents';

import NewEvent from './Event/NewEvent';

const Colors = {"one" : "#FF4500", "two" : "#FF0000"};

class FormTex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeTable: 'container-records',
            newEvent: [],
            clickEvent: false,
            moveMouse: false,
            startEvent: null
        }

        this.clickStart  = this.clickStart.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.clickEnd    = this.clickEnd.bind(this);
    }

    newEvent(id_start, id_end){
        let keys = this.addSources( localStorage, 
                                    this.props.dates.format("L"), 
                                    id_start, id_end);
        let newEvent = <NewEvent key={keys} 
                                 color={Colors.two} 
                                 start={id_start} 
                                 end={id_end} />;
        return newEvent;
    }

    loaderSources(localStorage, day, id){
        let daysEvents = [];
        let data = JSON.parse(localStorage.getItem('items'));
        data.map((line, index) => {
            if (line !== null && line.day === day){
                if (Number(line.hour_start) === id){
                    daysEvents.push(<NewEvent key={index} 
                                              color={Colors.two} 
                                              start={line.hour_start} 
                                              end={line.hour_end}/>);
                }
            }
          }
        );
        return daysEvents;
    }

    addSources(localStorage, day, start, end){
        let event = {
            "day": day,
            "titel": "",
            "text": "",
            "hour_start": start,
            "hour_end": end};
        let array = [...JSON.parse(localStorage.getItem('items')), event];
        localStorage.setItem('items', JSON.stringify(array));
        let data = JSON.parse(localStorage.getItem('items'));
        let count = data.length;
        return count;
    }

    clickStart(id){  
        this.setState({
            clickEvent: !this.state.clickEvent,
            startEvent: id
        });
        console.log('done')
        console.log(this.state.clickEvent)
        console.log(this.state.startEvent)
    }

    updateEvent(id){
        if(this.state.clickEvent){
            console.log(this.state.endEvent)
            this.setState({
                endEvent: id
            });
            console.log(this.state.endEvent)
        }
    }

    clickEnd(id){
        let newEvent = this.newEvent(this.state.startEvent, id);
        let arrayEvent = [...this.state.componentEvent, newEvent];
        if(this.state.clickEvent){
            this.setState({
                componentEvent: arrayEvent,
                moveMouse: !this.state.moveMouse,
                startEvent: null,
                endEvent: null
            });
        }
        console.log('up')
    }

    render(){
        let array = this.props.hourDay.map((hour) => {
            return (
                <React.Fragment key={hour} >
                   <div className="hoursoftext">
                       {<ContainerEvents key = {hour} 
                                         id = {hour} 
                                         dates = {this.props.day}
                                         table = {this.state.activeTable}
                                         loaderEvent = {this.loaderSources}
                                         />}
                    </div>
                   <div className="hoursoftext">
                       {<ContainerEvents key = {hour + 0.5} 
                                         id = {hour + 0.5} 
                                         dates = {this.props.day}
                                         table = {this.state.activeTable}
                                         loaderEvent = {this.loaderSources}
                                         />}
                   </div>
               </React.Fragment>
            );
        })
        return(
            array
        )
    }
}

FormTex.propTypes = {
    day: PropTypes.object.isRequired,
    hourDay: PropTypes.array.isRequired
}

export default FormTex;