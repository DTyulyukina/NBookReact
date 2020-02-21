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
        if (this.props.dates !== prevProps.dates || this.props.keyEvent !== prevProps.keyEvent){
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
                                              color={Colors.two} 
                                              start={line.hour_start} 
                                              end={line.hour_end}/>);
                }
            }
          }
        );
        return daysEvents;
    }

    render() {
        return (
            <div className={this.state.rowClass + this.props.activeClass}  
                 onMouseDown = {this.props.clickStart.bind(this, this.props.id)}
                 onMouseMove = {this.props.moveMouse.bind(this, this.props.id)}
                 onMouseUp = {this.props.clickEnd.bind(this, this.props.id)}
            >
                { this.state.componentEvent }
            </div>
        );
    }
}

ContainerEvents.propTypes = {
    id: PropTypes.number.isRequired,
    dates: PropTypes.object.isRequired,
    nameClass: PropTypes.string, 
    clickEvent: PropTypes.bool,
    clickStart: PropTypes.func.isRequired,
    keyEvent: PropTypes.number,
    clickEnd: PropTypes.func.isRequired,
    activeClass: PropTypes.string.isRequired,
    moveMouse: PropTypes.func.isRequired
}

export default ContainerEvents;