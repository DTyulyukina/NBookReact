import React from 'react';

import RadioButton from './RadioButton';

import Searchs from '@material-ui/icons/Search';

class Search extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="search">
                <form  className="d1" >
                    <input type="text" placeholder="Search..."/>
                    <div className="buttoms-check">
                       <button type="submit"><Searchs>Search</Searchs></button>
                    </div>
                </form> 
                <RadioButton />
            </div>    
        )
    }
}

export default Search;