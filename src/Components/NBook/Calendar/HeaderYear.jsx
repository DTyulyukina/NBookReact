import React from 'react';
import PropTypes from 'prop-types';

class HeaderYear extends React.Component {
    static propTypes ={
        year: PropTypes.string.isRequired,
        onClickYear: PropTypes.func.isRequired
    }

    constructor(props){ 
        super(props);

        this.state = {
            yDate: props.year
        };
    }

    render(){
        //let col = this.state.yBool ? 5 : 7;
        return (
            <tr className="name-year">
              <th colSpan="7"
                  onClick={(e) => this.props.onClickYear(e)}> 
                  { this.state.yDate }
              </th>
            </tr>
          );
    }
} 

export default HeaderYear;
