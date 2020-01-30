import React     from 'react';
import PropTypes from 'prop-types';

import NewEvent from './NewEvent/NewEvent';
import dataNews from './data';

import './DailyTimetable.scss';

const Colors = {"one" : "#FF4500", 
                "two" : "#FF0000"};
                
class ContainerEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentEvent: []
        };
    }

    loaderSources(dataNews, day){
        let daysEvents = [];
        dataNews.task.map((line) => {
            if (line.day === day){
                daysEvents.push(<NewEvent key={line.id}
                                          topEvent={Number(line.top)} 
                                          leftEvent={Number(line.left)} 
                                          color={Colors.two}/>);
            }
          }
        );
        return daysEvents;
    }

    componentWillMount(){
        this.setState({
            componentEvent: this.loaderSources(dataNews, this.props.dates.format("L"))
        });
    }

    componentWillUnmount(){
        this.setState({
            componentEvent: []
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.dates !== prevProps.dates) {
            this.setState({
                componentEvent: this.loaderSources(dataNews, this.props.dates.format("L"))
            });
        }
    }

    AddNewRecord(event){ 
        let leftEvent = 5;
        let topEvent = event.pageY;  
        let rect =  event.target.getBoundingClientRect();
        let containerText = document.getElementsByClassName('texts')[0].children;
        for( let index=0; index < containerText.length; index++) {
           let y = topEvent - containerText[index].getBoundingClientRect().top;
           if( 0 < y && y < 20 ) { 
            topEvent = containerText[index].getBoundingClientRect().top - rect.top;
            }
        }
        this.setState({
            componentEvent: <NewEvent  
                             topEvent={topEvent} 
                             leftEvent={leftEvent} 
                             color={Colors.two}/>
        });
        event.preventDefault();
    }

    render() {
        const {dates} = this.props;
        return (
            <div className="container-records" onClick={(e) => this.AddNewRecord(e, dates)}>
                { this.state.componentEvent }
            </div>
        );
    }
}

ContainerEvents.propTypes = {
    dates: PropTypes.object.isRequired
}

export default ContainerEvents;