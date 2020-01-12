import React from 'react';
import PropTypes from 'prop-types';

class HeaderYear extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            yBool: props.yearBool, 
            yDate: props.date
        };
        this.yearNow = this.yearNow.bind(this);
        this.yearsSelect = this.yearsSelect.bind(this);
    }

    yearNow(){
        return this.state.yDate.format("Y");
    };
    yearsSelect(event){
        this.setState({yBool: !this.state.yBool});
        event.preventDefault();
    };

    render(){
        return (
            <tr className="name-year">
              <th colSpan={(this.state.yBool && 5)||7}
                  onClick={(e) => this.yearsSelect(e)}> 
                  { this.yearNow() }
              </th>
            </tr>
          );
    }
} 

HeaderYear.propTypes ={
    yearBool : PropTypes.bool.isRequired,
    date: PropTypes.object.isRequired
}

export default HeaderYear;
