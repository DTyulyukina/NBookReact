import React from 'react';
import PropTypes from 'prop-types';

function HeaderYear(props) {
    let col = props.yearBool ? 5 : 7;
    return (
        <tr className="name-year">
            <th colSpan={col}
                onClick={(e) => props.onClickYear(e)}> 
                { props.year }
            </th>
        </tr>
    );
} 

HeaderYear.propTypes ={
    yearBool: PropTypes.bool.isRequired,
    year: PropTypes.string.isRequired,
    onClickYear: PropTypes.func.isRequired
}

export default HeaderYear;
