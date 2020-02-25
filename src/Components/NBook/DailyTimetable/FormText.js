import React from 'react';
import PropTypes from 'prop-types';
import ContainerEvents  from './ContainerEvents';

class FormTex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeClass: ' ',
            clickEvent: false,
            keyEvent: null,
            startEvent: null,
            moveId: [], 
            moveMouse: false
        }

        this.clickStart  = this.clickStart.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.clickEnd    = this.clickEnd.bind(this);
    }

    clickStart(id){ 
        this.setState({
            clickEvent: !this.state.clickEvent,
            startEvent: id
        });
    }

    clickEnd(id){
        if(this.state.clickEvent){
            let key = this.addSources(this.props.day.format("L"), this.state.startEvent, id);
            this.setState({
                activeClass: ' ',
                clickEvent: !this.state.clickEvent,
                keyEvent: key,
                startEvent: null,
                moveId: []
            });
        }
    }

    updateEvent(id){
        //let array = [...this.state.moveId, id];
        if(this.state.clickEvent){
            this.setState({
                moveMouse: !this.state.moveMouse,
                moveId: id
            });
        }
    }

    addSources(day, start, end){
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

    activeClassRow(hours){
        let status = '';
        if(this.state.startEvent === hours){
            status = ' active';
        }
        if(this.state.moveMouse){
            if(hours <= this.state.moveId){
                status = ' active';
            }
        }
        return status;
    }

    render(){ 
        let array = this.props.hourDay.map((hour) => {
            return (
                <React.Fragment key={hour}>
                   <div className="hoursoftext">
                       {<ContainerEvents key = {hour} 
                                         id = {hour} 
                                         dates = {this.props.day}
                                         clickEvent = {this.state.clickEvent}
                                         clickStart = {this.clickStart}
                                         keyEvent={this.state.keyEvent}
                                         clickEnd = {this.clickEnd}
                                         activeClass = {this.activeClassRow(hour)}
                                         moveMouse = {this.updateEvent}
                                         />}
                    </div>
                   <div className="hoursoftext">
                       {<ContainerEvents key = {hour + 0.5} 
                                         id = {hour + 0.5} 
                                         dates = {this.props.day}
                                         clickEvent = {this.state.clickEvent}
                                         clickStart = {this.clickStart}
                                         keyEvent={this.state.keyEvent}
                                         clickEnd = {this.clickEnd}
                                         activeClass = {this.activeClassRow(hour + 0.5)}
                                         moveMouse = {this.updateEvent}
                                         />}
                   </div>
               </React.Fragment>
            );
        })
        return(array)
       }   
    }

FormTex.propTypes = {
    day: PropTypes.object.isRequired,
    hourDay: PropTypes.array.isRequired
}

export default FormTex;