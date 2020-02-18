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
            height = 17 + 'px';
        }else
        if(this.props.start < this.props.end){
            height = ((this.props.end - this.props.start)/0.5)*17;
        }
        let newStyle = {
            top: this.props.topEvent + 'px',
            left: this.props.leftEvent + 'px',
            backgroundColor: this.props.color,
            width: '25%',
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
                <OptionNews className="titel"/>
            </div>
        );
    }
}

NewEvent.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default NewEvent;