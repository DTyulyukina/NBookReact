import React from 'react';
import PropTypes from 'prop-types';
import OptionNews from './OptionNews';
import TextArea from './TextArea';

class NewEvent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            styles: [] 
        }

        this.formText = this.formText.bind(this);
    }

    componentDidMount(){
        let height = null;
        if(this.props.start === this.props.end){
            height = 22 + 'px';
        }else
        if(this.props.start < this.props.end){
            height = ((this.props.end - this.props.start + 0.5)/0.5)*26.1;
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

    formText(){
        if(this.props.text !== null){
            if(this.props.idupdate === this.props.idEvent){
                return (
                    <TextArea id={this.props.idEvent} value={this.props.text} saveEvent={this.props.save}/>
                 );
            } else {
                return (
                    <React.Fragment>
                       <OptionNews className="text"   valueDef={this.props.text}/>
                       <OptionNews className="pencil" valueDef="&#9997;" act="true" keyId={this.props.idEvent} funcEvent={this.props.update}/>
                       <OptionNews className="cross"  valueDef="&times;" act="true" keyId={this.props.idEvent} funcEvent={this.props.dell} />
                    </React.Fragment>
                )
            }
        } else if (this.props.text === null){
            let text = 'Edit text event...';
            return (
               <TextArea id={this.props.idEvent} value={text} saveEvent={this.props.save}/>
            );
        } 
    }

    render(){
        return (
            <div className="new-events" style={this.state.styles}>
                { this.formText() }
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
    upEvent: PropTypes.bool,
    save: PropTypes.func,
    idupdate: PropTypes.number
}

export default NewEvent;