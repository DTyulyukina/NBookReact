import React            from 'react';
import PropTypes        from 'prop-types';

import './DailyTimetable.scss';
import dataNews from './data';
                
class ContainerEvents extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            componentEvent: []
        }
    }

    componentWillMount(){
        localStorage.setItem('items', JSON.stringify(dataNews));
        this.setState({
            componentEvent: this.props.loaderEvent(localStorage, this.props.dates.format("L"), this.props.id)
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
                componentEvent: this.props.loaderEvent(localStorage, this.props.dates.format("L"), this.props.id)
            });
        }
    }

    render() {
        return (
            <div className={this.props.table}  
                 //onMouseDownCapture = {this.clickStart.bind(this, this.props.id)}
                 //onMouseMoveCapture = {this.updateEvent.bind(this, this.props.id)}
                 //onMouseUpCapture = {this.clickEnd.bind(this, this.props.id)}
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
    loaderEvent: PropTypes.func.isRequired
}

export default ContainerEvents;