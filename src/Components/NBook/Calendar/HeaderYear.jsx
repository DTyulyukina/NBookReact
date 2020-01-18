import React from 'react';
import PropTypes from 'prop-types';

class HeaderYear extends React.Component {
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
        return (
            <tr className="name-year">
              <th colSpan={this.state.yBool && 7}
                  onClick={(e) => this.yearsSelect(e)}> 
                  { this.state.yDate }
              </th>
            </tr>
          );
    }
} 

HeaderYear.propTypes ={
    yearBool: PropTypes.bool.isRequired,
    year: PropTypes.string.isRequired
}

export default HeaderYear;
