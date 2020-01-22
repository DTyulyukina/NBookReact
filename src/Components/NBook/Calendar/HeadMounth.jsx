import React from 'react';
import PropTypes from 'prop-types';

class HeadMounth extends React.Component {
    static propTypes ={
        yearBool: PropTypes.bool.isRequired,
        monthBool: PropTypes.bool.isRequired,
        month: PropTypes.string.isRequired,
        onClickMonth: PropTypes.func.isRequired,
        onClickUpdateButtom: PropTypes.func.isRequired
    }

    constructor(props){ 
        super(props);
    }
    
    render(){
        let col = this.props.monthBool ? 2 : (this.props.yearBool ? 3 : 5);
        return (
            <tr className="name-month">
                <th className="arrow left" onClick={(e)=>this.props.onClickUpdateButtom(e, 'prev')}/>
                <th colSpan={col} onClick={(e)=>this.props.onClickMonth(e)}>
                    { this.props.month }
                </th>
                <th className="arrow right" onClick={(e)=>this.props.onClickUpdateButtom(e, 'last')}/>
            </tr>
        )
    }
} 

export default HeadMounth;