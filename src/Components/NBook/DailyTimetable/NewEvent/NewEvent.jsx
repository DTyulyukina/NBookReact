import React from 'react';
import PropTypes from 'prop-types';

class NewEvent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            styles: []
        }
    }

    componentDidMount(){
        let newStyle = {
            top: this.props.topEvent + 'px',
            left: this.props.leftEvent + 'px',
            backgroundColor: this.props.color,
            width: '95%',
            minHeight: '15px'
        };
        this.setState({
            styles: newStyle
        });
    }

    componentWillUnmount(){
        this.setState({
            styles: []
        });
    }

    render(){
        return (
            <div className="new-events" style={this.state.styles}>
                <span className="titel"></span>
                <span className="text"></span>
                <span className="pencil">&#9998;</span>
                <span className="cross">&times;</span>
            </div>
        );
    }
}

NewEvent.propTypes = {
    topEvent: PropTypes.number.isRequired,
    leftEvent: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default NewEvent;