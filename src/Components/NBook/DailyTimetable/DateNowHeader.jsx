import React     from 'react';
import PropTypes from 'prop-types';

function DateNowHeader(props){
    return (
        <div className='day'>
            <div className="arrow left" onClick={(e) => props.buttomsLastPrev(e, 'prev')}/>
            <div id='number-day'> { props.day.format("D") } </div>
            <div id='attr-day'>
                <div id='day-of-week'> { props.day.format("dddd") } </div>
                <div id='month-day'> { props.day.format("MMMM") } </div>
                <div id='year-day'> { props.day.format("Y") } </div>
            </div>
            <div className="arrow right" onClick={(e) => props.buttomsLastPrev(e, 'last')}/>
        </div>
    );
}

DateNowHeader.propTypes = {
    day: PropTypes.object.isRequired,
    buttomsLastPrev: PropTypes.func.isRequired
}

export default DateNowHeader;