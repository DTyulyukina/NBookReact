import React            from 'react';
import PropTypes        from 'prop-types';

import NewEvent from './Event/NewEvent';
import dataNews from './data';

import './DailyTimetable.scss';

const Colors = {"one" : "#FF4500", "two" : "#FF0000"};
                
class ContainerEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentEvent: []
        };
    }

    loaderSources(localStorage, day, id){
        let daysEvents = [];
        let data = JSON.parse(localStorage.getItem('items'));
        data.map((line, index) => {
            if (line.day === day){
                if (Number(line.hour) === id){
                    daysEvents.push(<NewEvent key={index}
                        color={Colors.two}/>);
                }
            }
          }
        );
        return daysEvents;
    }

    updateSources(localStorage, day, id){
        let event = {
            "day": day,
            "titel": "",
            "text": "",
            "hour": id};
        let array = [...localStorage, event];
        localStorage.setItem('items', JSON.stringify(array));
        let data = JSON.parse(localStorage.getItem('items'));
        let count = data.length;
        return count;
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
        if (this.props.dates !== prevProps.dates) {
            this.setState({
                componentEvent: this.loaderSources(localStorage, this.props.dates.format("L"), this.props.id)
            });
        }
    }

    addNewRecord(event, id){ 
        let keys = this.updateSources(localStorage, this.props.dates.format("L"), id);
        let newEvent = <NewEvent key={keys} color={Colors.two}/>;
        let arrayEvent = [...this.state.componentEvent, newEvent];
        this.setState({
            componentEvent: arrayEvent
        });
        event.preventDefault();
    }

    render() {
        const {dates} = this.props
        return (
            <div className="container-records" 
                 onClick={(e) => this.addNewRecord(e, dates, this.props.id)}>
                { this.state.componentEvent }
            </div>
        );
    }
}

ContainerEvents.propTypes = {
    id: PropTypes.number.isRequired,
    dates: PropTypes.object.isRequired
}

export default ContainerEvents;