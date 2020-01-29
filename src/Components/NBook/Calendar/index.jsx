import React from "react";
import moment from "moment";

import "./Calendar.scss";

import HeaderYear    from './HeaderYear';
import HeadMounth    from './HeadMounth';
import Headers       from './TableSelect';
import CalendarTable from './CalendarTable';

class Calendar extends React.Component {
  constructor(){
    super();

    this.state = {
      dateObject: moment(),
      ShowYearsSelect: false,
      ShowMonthSelect: false
    };

    this.yearsSelect         = this.yearsSelect.bind(this);
    this.monthSelect         = this.monthSelect.bind(this);
    this.updateSelect        = this.updateSelect.bind(this);
    this.updateMonthLastPrev = this.updateMonthLastPrev.bind(this);
  }

  // mounth
  monthNow(){
    return this.state.dateObject.format("MMMM");
  };
  yearNow(){
    return this.state.dateObject.format("Y");
  };
  yearsSelect(event){
    this.setState({
      ShowYearsSelect: !this.state.ShowYearsSelect
    });
    event.preventDefault();
  };

  monthSelect(event){
    this.setState({
      ShowMonthSelect: !this.state.ShowMonthSelect
    });
    event.preventDefault();
  }

  updateSelect(event, param, str){
    console.log(str)
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set(str, param);
    if( str === 'month' ){
      this.setState({
        dateObject: dateObject,
        ShowMonthSelect: !this.state.ShowMonthSelect
      });
    } else if( str==='year' ){
      this.setState({
        dateObject: dateObject,
        ShowYearsSelect: !this.state.ShowYearsSelect
      });
    }
    event.preventDefault();
  };

  updateMonthLastPrev(event, param){
    let dateObject = Object.assign({}, this.state.dateObject);
    if( param === 'last' ){
      dateObject = moment(dateObject).add(1, "month"); 
    }else if( param === 'prev' ){
      dateObject = moment(dateObject).subtract(1, "month");
    }
    this.setState({
      dateObject: dateObject
    })
    event.preventDefault();
  }

  render() {
    return (
      <table className="calendar">
        <thead>  
          <HeaderYear 
           year = {this.yearNow()} 
           yearBool = {this.state.ShowYearsSelect}
           onClickYear = {this.yearsSelect}/>
          <HeadMounth 
           yearBool = {this.state.ShowYearsSelect} 
           monthBool = {this.state.ShowMonthSelect}
           month = {this.monthNow()} 
           onClickMonth = {this.monthSelect}
           onClickUpdateButtom = {this.updateMonthLastPrev}/>
        </thead>
        <tbody>
          <Headers 
           yearBool = {this.state.ShowYearsSelect} 
           monthBool = {this.state.ShowMonthSelect}/>
           
          <CalendarTable {...this.state}
           onChangeSelect = {this.updateSelect}
          />
        </tbody>
      </table>
    );
  }
}

export default Calendar;
