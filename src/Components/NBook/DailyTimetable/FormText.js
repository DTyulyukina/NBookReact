import React from 'react';
import PropTypes from 'prop-types';
import ContainerEvents  from './ContainerEvents';

class FormTex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeClass: 'hoursoftext',
            clickEvent: false,
            keyEvent: null,
            startEvent: null,
            moveId: null, 
            moveMouse: false,
            dEvent: false,
            uEvent: false
        }

        this.clickStart     = this.clickStart.bind(this);
        this.updateEvent    = this.updateEvent.bind(this);
        this.clickEnd       = this.clickEnd.bind(this);
        this.activeClassRow = this.activeClassRow.bind(this);
        this.onDellEvent    = this.onDellEvent.bind(this);
        this.onUpdateEvent  = this.onUpdateEvent.bind(this);
        this.onSaveEvent    = this.onSaveEvent.bind(this);
    }

    clickStart(event, id){
        if(event.target.className === 'container-records') {
            this.setState({
                clickEvent: !this.state.clickEvent,
                startEvent: id
            });
        }
        event.preventDefault();
    }

    clickEnd(id){
        if(this.state.clickEvent){
            let key = this.addSources(this.props.day.format("L"), this.state.startEvent, id);
            this.setState({
                dEvent: false,
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
            "text": null,
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
        if(this.state.clickEvent && 
            this.state.startEvent === hours){
               status = ' active';
        } else 
        if(this.state.moveMouse && 
            hours <= this.state.moveId && 
            hours >= this.state.startEvent){
               status = ' active';
        }
        return status;
    }

    onDellEvent(id){
        let array = JSON.parse(localStorage.getItem('items'));
        let newMassiv = [];
        array.map((value, index) => {
            if(index !== id){
                newMassiv.push(value);
            }
        });
        if(array !== newMassiv){
            localStorage.setItem('items', JSON.stringify(newMassiv));
            this.setState({
                dEvent: !this.state.dEvent
            });
        }
    }

    onUpdateEvent(id){
        this.setState({
            uEvent: !this.state.uEvent
        });
        console.log('update' + this.state.uEvent + ' ' + id)
    }

    onSaveEvent(id, text){
        let array = JSON.parse(localStorage.getItem('items'));
        let newMassiv = [];
        array.map((value, index) => {
            if(index === id){
                let event = {
                    "day": value.day,
                    "text": text,
                    "hour_start": value.hour_start,
                    "hour_end": value.hour_end};
                newMassiv.push(event);
            } else {
                newMassiv.push(value);
            }
        });
        if(array !== newMassiv){
            localStorage.setItem('items', JSON.stringify(newMassiv));
        }
        this.setState({
            uEvent: !this.state.uEvent
        });
    }

    render(){ 
        let array = this.props.hourDay.map((hour) => {
            return (
                <React.Fragment key={hour}>
                   <div className={ this.state.activeClass}>
                       {<ContainerEvents key = {hour} 
                                         id = {hour} 
                                         dates = {this.props.day}
                                         clickStart = {this.clickStart}
                                         keyEvent={this.state.keyEvent}
                                         clickEnd = {this.clickEnd}
                                         activeClass = {this.activeClassRow(hour)}
                                         moveMouse = {this.updateEvent}
                                         dellEvent = {this.onDellEvent}
                                         eventRemove ={this.state.dEvent}
                                         eventUpdate = {this.onUpdateEvent}
                                         uEvent = {this.state.uEvent}
                                         onSave = {this.onSaveEvent}
                                         />}
                    </div>
                   <div className={ this.state.activeClass }>
                       {<ContainerEvents key = {hour + 0.5} 
                                         id = {hour + 0.5} 
                                         dates = {this.props.day}
                                         clickStart = {this.clickStart}
                                         keyEvent={this.state.keyEvent}
                                         clickEnd = {this.clickEnd}
                                         activeClass = {this.activeClassRow(hour + 0.5)}
                                         moveMouse = {this.updateEvent}
                                         dellEvent = {this.onDellEvent}
                                         eventRemove ={this.state.dEvent}
                                         eventUpdate = {this.onUpdateEvent}
                                         uEvent = {this.state.uEvent}
                                         onSave = {this.onSaveEvent}
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