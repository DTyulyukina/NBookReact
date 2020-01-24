import React     from 'react';
import PropTypes from 'prop-types';

import NewEvent from './NewEvent';

import './DailyTimetable.scss';

const Colors = {"one" : "#FF4500", 
                "two" : "#FF0000"};
                
class ContainerEvents extends React.Component {
    static propTypes = {
        componentEvent: PropTypes.object,
        newEvent:       PropTypes.object,
        clickContainer: PropTypes.func    
    };

    constructor(props) {
        super(props);
        this.state = {
            componentEvent: []
        };
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
                            rect={rect}
                            dates={dates}/>
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

export default ContainerEvents;