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
        let newStyle = {
            top: this.props.topEvent + 'px',
            left: this.props.leftEvent + 'px',
            backgroundColor: this.props.color,
            width: '25%',
            minHeight: '17px'
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

    mouseUP(event){
        if(event.target.className === 'new-events'){
            
        }
        event.preventDefault();
    }

    render(){
        return (
            <div className="new-events" style={this.state.styles} onClick={(e)=>this.mouseUP(e)}>
                <OptionNews className="titel"/>
            </div>
        );
    }
}

NewEvent.propTypes = {
    color: PropTypes.string.isRequired
}

export default NewEvent;