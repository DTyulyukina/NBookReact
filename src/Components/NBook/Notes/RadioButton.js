import React from 'react';

class RadioButton extends React.Component{
    constructor(){
        super();

        this.state = {
            check_one: true,
            check_two: false
        }

        this.changeInput = this.changeInput.bind(this);
    }

    componentDidMount(){
        this.setState({ check_one: true, check_two: false});
    }

    componentWillUnmount(){
        this.setState({ check_one: true, check_two: false});
    }

    changeInput(event){
        if(event.target.id === 'radioButton1'){
            this.setState({ check_one: true, 
                            check_two: false});
            this.props.onChange('titel');
        } 
        else if(event.target.id === 'radioButton2'){
            this.setState({ check_one: false, 
                            check_two: true});
            this.props.onChange('key');
        }
    }

    render(){
        return (
            <div className="radios">
                    <input type="radio" id="radioButton1" onChange={(event) => this.changeInput(event)} 
                                                          checked={ this.state.check_one }
                                                          name="radioButton1"/><label>title</label> 
                    <input type="radio" id="radioButton2" onChange={(event) => this.changeInput(event)} 
                                                          checked={ this.state.check_two }
                                                          name="radioButton2"/><label>key words</label> 
            </div>    
        )
    }
}

export default RadioButton;