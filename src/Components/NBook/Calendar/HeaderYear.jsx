import React from 'react';
import PropTypes from 'prop-types';

class HeaderYear extends React.Component {
    static propTypes ={
        yearBool: PropTypes.bool.isRequired,
        year: PropTypes.string.isRequired
    }

    constructor(props){ 
        super(props);

        this.state = {
            yBool: props.yearBool, 
            yDate: props.year
        };
        this.yearsSelect = this.yearsSelect.bind(this);
    }

    yearsSelect(event){
        this.setState({yBool: !this.state.yBool});
        event.preventDefault();
    };

    render(){
        //let col = this.state.yBool ? 5 : 7;
        return (
            <tr className="name-year">
              <th colSpan="7"
                  onClick={(e) => this.yearsSelect(e)}> 
                  { this.state.yDate }
              </th>
            </tr>
          );
    }
} 

export default HeaderYear;
