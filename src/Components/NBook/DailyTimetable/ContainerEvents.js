import React            from 'react';
import PropTypes        from 'prop-types';

import './DailyTimetable.scss';
import dataNews from './data';

import NewEvent from './Event/NewEvent';

const Colors = {"one" : "#FF4500", "two" : "#FF0000"};
                
class ContainerEvents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rowClass: 'container-records', 
            componentEvent: []
        }
    }

    componentWillMount(){
        localStorage.setItem('items', JSON.stringify(dataNews));
        this.setState({
            componentEvent: this.loaderSources(localStorage, this.props.dates.format("L"), this.props.id)
        });
    }

    componentWillUnmount(){
        this.setState({
            componentEvent: []
        });
    }

    componentDidUpdate(prevProps){
        if (this.props.dates !== prevProps.dates || 
            this.props.keyEvent !== prevProps.keyEvent ||
            this.props.eventRemove !== prevProps.eventRemove ||
            this.props.sEvent !== prevProps.sEvent || 
            this.props.uEvent !== prevProps.uEvent){
            this.setState({
                componentEvent: this.loaderSources(localStorage, this.props.dates.format("L"), this.props.id)
            });
        } 
    }

    loaderSources(localStorage, day, id){
        let daysEvents = [];
        let data = JSON.parse(localStorage.getItem('items'));
        data.map((line, index) => {
            if (line !== null && line.day === day){
                if (Number(line.hour_start) === id){
                    daysEvents.push(<NewEvent key={index} 
                                              idEvent={index}
                                              text={line.text}
                                              color={Colors.two} 
                                              start={line.hour_start} 
                                              end={line.hour_end}
                                              dell={this.props.dellEvent}
                                              update={this.props.eventUpdate}
                                              upEvent={this.props.uEvent}
                                              save={this.props.onSave}
                                              idupdate={this.props.idUpdate}
                                             />);
                }
            }
          }
        );
        return daysEvents;
    }

    render() {
        return (
            <div className={this.state.rowClass + this.props.activeClass}    
                 onMouseDown = {(e) => this.props.clickStart(e, this.props.id)}
                 onMouseMove = {() => this.props.moveMouse(this.props.id)}
                 onMouseUp = {() => this.props.clickEnd(this.props.id)} >
                { this.state.componentEvent }
            </div>
        );
    }
}

ContainerEvents.propTypes = {
    id: PropTypes.number.isRequired,
    dates: PropTypes.object.isRequired,
    nameClass: PropTypes.string, 
    clickStart: PropTypes.func,
    keyEvent: PropTypes.number,
    clickEnd: PropTypes.func,
    activeClass: PropTypes.string,
    moveMouse: PropTypes.func,
    dellEvent: PropTypes.func,
    eventRemove: PropTypes.bool,
    eventUpdate: PropTypes.func,
    uEvent: PropTypes.bool,
    onSave: PropTypes.func,
    idUpdate: PropTypes.number,
    sEvent: PropTypes.bool
}

export default ContainerEvents;