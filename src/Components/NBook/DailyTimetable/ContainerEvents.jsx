import React     from 'react';
import PropTypes from 'prop-types';

import NewEvent from './NewEvent';
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

    componentWillMount(){
        const datas = dataNews;

        let day = this.props.dates.format("YYYY MM DD");
        if( day === this.props.dates ){
            this.props.dates.
            this.setState({
                componentEvent: <NewEvent  
                                 topEvent={day.top} 
                                 leftEvent={day.left} 
                                 color={Colors.two}
                                 />
            });
        }

        console.log(datas.date);
    }

    AddNewRecord(event, dates){ 
        let leftEvent = 5;
        let topEvent = event.pageY;  
        let rect =  event.target.getBoundingClientRect();
        this.setState({
            componentEvent: <NewEvent  
                             topEvent={topEvent} 
                             leftEvent={leftEvent} 
                             color={Colors.two}
                             rect={rect} />
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