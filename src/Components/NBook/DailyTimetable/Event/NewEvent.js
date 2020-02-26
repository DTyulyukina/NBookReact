import React from 'react';
import PropTypes from 'prop-types';
import OptionNews from './OptionNews';

class NewEvent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            styles: []
        }
    }

    componentDidMount(){
        let height = null;
        if(this.props.start === this.props.end){
            height = 20 + 'px';
        }else
        if(this.props.start < this.props.end){
            height = ((this.props.end - this.props.start + 0.5)/0.5)*23.8;
        }
        let newStyle = {
            top: this.props.topEvent + 'px',
            left: this.props.leftEvent + 'px',
            backgroundColor: this.props.color,
            width: '100%',
            minHeight: height
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
                <OptionNews className="text" value={this.props.text}/>
                <OptionNews className="pencil" value="&#9998;"/>
                <OptionNews className="cross" value="&times;" keyId={this.props.idEvent} removeEvent={this.props.dell} />
            </div>
        );
    }
}

NewEvent.propTypes = {
    idEvent: PropTypes.number,
    text: PropTypes.string,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    dell: PropTypes.func
}

export default NewEvent;