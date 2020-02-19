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

    /*newEvent(id_start, id_end){
        this.addSources( localStorage, 
                        this.props.dates.format("L"), 
                        id_start, id_end);
        let newEvent = <NewEvent key={this.props.keyEvent + 1} 
                                 color="#FF0000" 
                                 start={id_start} 
                                 end={id_end} />;
        return newEvent;
    }*/

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
            <div className={this.props.table}  
                 onMouseDown = {this.props.clickStart.bind(this, this.props.id)}
                 //onMouseMove = {this.props.moveMouse.bind(this, this.props.id)}
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
    table: PropTypes.string.isRequired, 
    clickStart: PropTypes.func.isRequired,
    keyEvent: PropTypes.number,
    clickEnd: PropTypes.func.isRequired
}

export default ContainerEvents;