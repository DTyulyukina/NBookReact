import React from 'react';
import OptionNews from './OptionNews';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.valueDef
    };

    this.handleChange = this.handleChange.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onInput(event){
    this.refs.text.focus();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          <textarea type="text" defaultValue={this.state.value} onChange={this.handleChange} 
                                ref="text" onClick={this.onInput}/>
        </label>
          <OptionNews className="save"  valueDef="&#128190;" act="true" keyId={this.props.idEvent}/>
      </form>
    );
  }
}
  
export default TextArea;