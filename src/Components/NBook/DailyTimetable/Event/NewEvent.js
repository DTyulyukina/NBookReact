import React from 'react';
import PropTypes from 'prop-types';
import OptionNews from './OptionNews';
import TextArea from './TextArea';

class NewEvent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            styles: [],
            value: ' ' 
        }

        this.formText     = this.formText.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let height = null;
        if(this.props.start === this.props.end){
            height = 22 + 'px';
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

    handleChange(event) {
        console.log(event.target)
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    formText(){
        if(this.props.uEvent){
            return <OptionNews className="text" valueDef={this.props.text}/>;
        } else {
            return <TextArea keyId={this.props.idEvent} valueDef={this.props.text} />;
        }
    }

    render(){
        return (
            <div className="new-events" style={this.state.styles}>
                { this.formText() }
                <OptionNews className="pencil" valueDef="&#9998;" keyId={this.props.idEvent} funcEvent={this.props.update}/>
                <OptionNews className="cross"  valueDef="&times;" keyId={this.props.idEvent} funcEvent={this.props.dell} />
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
    dell: PropTypes.func,
    update: PropTypes.func, 
    upEvent: PropTypes.bool
}

export default NewEvent;