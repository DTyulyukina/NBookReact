import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.valueDef
    };

    this.textInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onInput(){
    this.textInput.current.focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} 
                             ref={this.textInput} onClick={this.onInput}/>
        </label>
      </form>
    );
  }
}
  
export default TextArea;