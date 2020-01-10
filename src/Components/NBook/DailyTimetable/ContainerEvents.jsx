import React     from 'react';
import PropTypes from 'prop-types';

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
            componentEvent: <this.AddEvent  
                            topEvent={topEvent} 
                            leftEvent={leftEvent} 
                            rect={rect}
                            dates={dates}/>
        });
        event.preventDefault();
    }

    AddEvent(props){
        console.log(props);
        let containerText = document.getElementsByClassName('texts')[0].children;
        let coordX;
        for( let index=0; index < containerText.length; index++) {
            let y = props.topEvent - containerText[index].getBoundingClientRect().top;
            if( 0 < y && y < 20 ) { 
               coordX = containerText[index].getBoundingClientRect().top - props.rect.top;
            }
            //console.log(coordX);
        }
        let newStyle = {
            top: coordX + 'px',
            left: props.leftEvent + 'px',
            backgroundColor: Colors.two,
            width: '95%',
            minHeight: '20px'
        };
        return (
            <div className="new-events" style={newStyle}>
                <span className="titel"></span>
                <span className="text"></span>
                <span className="pencil">&#9998;</span>
                <span className="cross">&times;</span>
            </div>
        );
    }
    
    AddContainerRecord(props){
        return (
            <div className="container-records" onClick={props.clickContainer}>
              { props.newEvent }
            </div>
        );
    }

    render() {
        const {dates} = this.props;

        return (
            <this.AddContainerRecord
             newEvent={this.state.componentEvent} 
             clickContainer={(e) => this.AddNewRecord(e, dates)} 
             />
        );
    }
}

export default ContainerEvents;