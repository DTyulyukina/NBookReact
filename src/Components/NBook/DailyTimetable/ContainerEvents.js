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

    loaderSources(localStorage, day){
        let daysEvents = [];
        let data = JSON.parse(localStorage.getItem('items'));
        data.map((line, index) => {
            if (line.day === day){
                daysEvents.push(<NewEvent key={index}
                                          topEvent={Number(line.top)} 
                                          leftEvent={Number(line.left)} 
                                          color={Colors.two}/>);
            }
          }
        );
        return daysEvents;
    }

    updateSources(day, topEvent, leftEvent){
        let event = {
            "day": day,
            "titel": "",
            "text": ""};
        let array = [...localStorage, event];
        localStorage.setItem('items', JSON.stringify(array));
        let data = JSON.parse(localStorage.getItem('items'));
        let count = data.length;
        console.log(data)
        console.log(count)
        return count;
    }

    componentWillMount(){
        localStorage.setItem('items', JSON.stringify(dataNews));
        this.setState({
            componentEvent: this.loaderSources(localStorage, this.props.dates.format("L"))
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
                componentEvent: this.loaderSources(localStorage, this.props.dates.format("L"))
            });
        }
    }

    addNewRecord(event, key){ 
        /*let leftEvent = 5;
        let topEvent = event.pageY;  
        let rect =  event.target.getBoundingClientRect();
        let containerText = document.getElementsByClassName('texts')[0].children;
        for( let index=0; index < containerText.length; index++) {
           let y = topEvent - containerText[index].getBoundingClientRect().top;
           if( 0 < y && y < 20 ) { 
               topEvent = containerText[index].getBoundingClientRect().top - rect.top;
            }
        }*/
        let keys = this.updateSources(this.props.dates.format("L"));
        let newEvent = <NewEvent key={key+' '+keys} color={Colors.two}/>;
        let arrayEvent = [...this.state.componentEvent, newEvent];
        this.setState({
            componentEvent: arrayEvent
        });
        event.preventDefault();
    }

    render() {
        const {dates} = this.props;
        return (
            <div className="container-records" 
                 onClick={(e) => this.addNewRecord(escape)}>
                { this.state.componentEvent }
            </div>
        );
    }
}

ContainerEvents.propTypes = {
    dates: PropTypes.object.isRequired
}

export default ContainerEvents;