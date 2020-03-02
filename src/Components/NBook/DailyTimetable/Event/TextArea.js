import React from 'react';
import PropTypes from 'prop-types';
import OptionNews from './OptionNews';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueForm: this.props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onInput(event){
    event.preventDefault();
    this.refs.text.focus();
  }

  handleChange(event) {
    this.setState({valueForm: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          <textarea type="text" placeholder={this.props.value} onChange={this.handleChange} 
                                ref="text" onClick={this.onInput}/>
        </label>
        <OptionNews className="save"  
                    valueDef="&#128190;" 
                    act="true" 
                    keyId={this.props.id} 
                    valueText={this.state.valueForm} 
                    funcEvent={this.props.saveEvent}/>
      </form>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  saveEvent: PropTypes.func
}
  
export default TextArea;