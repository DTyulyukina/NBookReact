import React from 'react';

import RadioButton from './RadioButton';

import Searchs from '@material-ui/icons/Search';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
            check: ''
        }

        this.changeCheck  = this.changeCheck.bind(this);
        this.handleInput  = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({ text: '', check: 'title'});
    }

    componentWillUnmount(){
        this.setState({ text: '', check: ''});
    }

    changeCheck(str){
        this.setState({ check: str});
    }
    
    handleInput(event){
        this.setState({ text: event.target.value});
    }

    handleChange(event){
        event.preventDefault();
        let arr = this.state.check === 'title' ? 'TITLE' : 'TEXT';
        this.props.onSearch(arr, this.state.text);
    }

    render(){
        return (
            <div className="search">
                <form className="d1" onSubmit={(event) => this.handleChange(event)}>
                    <input type="text" placeholder="Search..." onChange={(event) => this.handleInput(event)}/>
                    <div className="buttoms-check">
                       <button type="submit"><Searchs>Search</Searchs></button>
                    </div>
                </form> 
                <RadioButton onChange={this.changeCheck}/>
            </div>    
        )
    }
}

export default Search;