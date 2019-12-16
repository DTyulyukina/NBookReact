import React     from 'react';
import PropTypes from 'prop-types';
import data      from './data';

import './DailyTimetable.scss';

const Colors = {"one" : "#FF4500", 
                "two" : "#FF0000"};
                
export default class ContainerEvents extends React.Component {
    constructor(props) {
        super(props);

        //this.day = props.theme;
        //console.log(this.day);

        this.state = {
            componentEvent: []
        };
        this.addEvent = this.addEvent.bind(this);
    }

    componentDidMount() {
        this.readFile();
    }

    readFile(){
        let file = JSON.stringify(data);
        let array = JSON.parse(file);
        this.eventsOfDay(array);
    }

    eventsOfDay( arg){
        /*arg.forEach(element => {
            console.log( element );
        });
         let newStyle = {
            top: coordX + 'px',
            left: props.leftEvent + 'px',
            backgroundColor: Colors.one,
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
        );*/
    }

    addNewRecord(event){ 
        let leftEvent = 5;
        let topEvent = event.pageY;  
        let rect =  event.target.getBoundingClientRect();
        this.setState({
            componentEvent: <this.addEvent  
                            topEvent={topEvent} 
                            leftEvent={leftEvent} 
                            rect={rect} />
        });
        event.preventDefault();
    }

    addEvent(props){ 
        let containerText = document.getElementsByClassName('texts')[0].children;
        let coordX;
        for( let index=0; index < containerText.length; index++) {
            let y = props.topEvent - containerText[index].getBoundingClientRect().top;
            if( 0 < y && y < 20 ) { 
               coordX = containerText[index].getBoundingClientRect().top - props.rect.top;
            }
            console.log(coordX);
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
        return (
            <this.AddContainerRecord
             newEvent={this.state.componentEvent} 
             clickContainer={(e) => {this.addNewRecord(e)}} 
             />
        );
    }
}

ContainerEvents.propTypes = {
    componentEvent: PropTypes.object,
    //sourse:         PropTypes.document,
    newEvent:       PropTypes.object,
    clickContainer: PropTypes.func

};