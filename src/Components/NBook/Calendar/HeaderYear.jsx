import React from 'react';
import PropTypes from 'prop-types';

class HeaderYear extends React.Component {
    static propTypes ={
        yearBool: PropTypes.bool.isRequired,
        year: PropTypes.string.isRequired,
        onClickYear: PropTypes.func.isRequired
    }

    constructor(props){ 
        super(props);
    }

    render(){
        let col = this.props.yearBool ? 5 : 7;
        return (
            <tr className="name-year">
              <th colSpan={col}
                  onClick={(e) => this.props.onClickYear(e)}> 
                  { this.props.year }
              </th>
            </tr>
          );
    }
} 

export default HeaderYear;
