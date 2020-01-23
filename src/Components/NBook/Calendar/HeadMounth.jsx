import React from 'react';
import PropTypes from 'prop-types';

function HeadMounth(props) {  
    let col = props.monthBool ? 2 : (props.yearBool ? 3 : 5);
    return (
        <tr className="name-month">
            <th className="arrow left" onClick={(e)=>props.onClickUpdateButtom(e, 'prev')}/>
            <th colSpan={col} onClick={(e)=>props.onClickMonth(e)}>
                { props.month }
            </th>
            <th className="arrow right" onClick={(e)=>props.onClickUpdateButtom(e, 'last')}/>
        </tr>
    )
} 

HeadMounth.propTypes ={
    yearBool: PropTypes.bool.isRequired,
    monthBool: PropTypes.bool.isRequired,
    month: PropTypes.string.isRequired,
    onClickMonth: PropTypes.func.isRequired,
    onClickUpdateButtom: PropTypes.func.isRequired
}

export default HeadMounth;