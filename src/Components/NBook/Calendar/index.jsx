import React from "react";
import moment from "moment";

import "./Calendar.scss";

import InstructionYears from './YearInstruction';
import InstractionMonth from './MonthInstruction';

export default class Calendar extends React.Component {
  constructor(){
    super();
    this.weekdays = moment.weekdays(true);
    this.month = moment.months();

    this.years = [];
    for(let y = 0; y < 10; y++) {
      this.years.push(Number(moment().format("Y")) + y);
    }

    this.state = {
      dateObject: moment(),
      ShowYearsSelect: false,
      ShowMonthSelect: false,
      DayMounthYear: true
    };

    this.yearsSelect       = this.yearsSelect.bind(this);
    this.monthSelect       = this.monthSelect.bind(this);
    this.updateMonthSelect = this.updateMonthSelect.bind(this);
    this.updateYearSelect  = this.updateYearSelect.bind(this);
    this.updateMonthLast   = this.updateMonthLast.bind(this);
    this.updateMonthPev    = this.updateMonthPev.bind(this);
    this.rowYear           = this.rowYear.bind(this);
    this.rowMonth          = this.rowMonth.bind(this);
  }

  // day of mounth
  firstDayOfMonth(){
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
   return firstDay;
  };
  dayInMonth(){
    return this.state.dateObject.daysInMonth();
  };
  currentDay(){
    return this.state.dateObject.format("D");
  };

  // mounth
  monthNow(){
    return this.state.dateObject.format("MMMM");
  };
  
  monthSelect(event){
    this.setState({ShowMonthSelect: !this.state.ShowMonthSelect});
    event.preventDefault();
  };
  updateMonthSelect(event, index){
    let monthNo = this.month[index]; 
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject,
      ShowMonthSelect: !this.state.ShowMonthSelect
    });
    event.preventDefault();
  };

  // years now
  yearNow(){
    return this.state.dateObject.format("Y");
  };
  yearsSelect(event){
    this.setState({ShowYearsSelect: !this.state.ShowYearsSelect});
    event.preventDefault();
  };
  updateYearSelect(event, year){
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
      ShowYearsSelect: !this.state.ShowYearsSelect
      // ShowMonthSelect: !this.state.ShowMonthSelect
    });
    event.preventDefault();
  };

  addTable(count, m, l) {
    var totalSlots = [...m, ...l];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % count !== 0) {
        cells.push(row); 
      } else {
        rows.push(cells);  
        cells = [];  
        cells.push(row); 
      }
      if (i === totalSlots.length - 1) { 
        rows.push(cells);
      }
    });
    return rows
  };

  updateMonthLast(event){
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).add(1, "month"); 
    this.setState({
      dateObject: dateObject
    })
    event.preventDefault();
  }
  updateMonthPev(event){
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).subtract(1, "month"); 
    this.setState({
      dateObject: dateObject
    })
    event.preventDefault();
  }

  rowYear(props){
    return (
      <tr className="name-year">
        <th colSpan={(props.yBool && 5)||7}
            onClick={(e) => this.yearsSelect(e)}> 
            { this.yearNow() }
        </th>
      </tr>
    );
  }
  rowMonth(props){
    return (
      <tr className="name-month">
      <th className="arrow left" onClick={(e) => this.updateMonthPev(e) }/>
      <th colSpan={(props.mBool && 2)||(props.yBool && 3)||5}
          onClick={(e) => this.monthSelect(e)}>
        { this.monthNow() }
      </th>
      <th className="arrow right" onClick={(e) => this.updateMonthLast(e) }/>
    </tr>
    );
  }

  render() {
    // day of week
    let weekdaysname = this.weekdays.map((day) => {
      return <th key={day} className="week-day">{ day }</th>;
    });

    // day of mounth in interface
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i} className="calendar-day empty">{""}</td>
      );
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.dayInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";   
      daysInMonth.push(  
        <td key={'calendar-day' + d} className={`calendar-day ${currentDay}`}>   
          <span>{d}</span>
        </td>
      );
    }
    let daysinmonth = this.addTable(7, blanks, daysInMonth).map((dm,i) => {
      return <tr key={'dm'+ i}>{dm}</tr>;
    });

    //mouth
    let array_m = this.month.map((am, i) => {
      return <td key={i} className="array-name-mounth" onClick={(e) => this.updateMonthSelect(e, i)}>{am}</td>;
    })
    let monthname = this.addTable(4, 3, array_m ).map((d, i) => {
      return <tr key={'d'+ i}>{d}</tr>;
    });

    // add years in intarface
    let a_y = this.years.map((year) => {
      return <td key={year} className="array-year" onClick={(e) => this.updateYearSelect(e, year)}>{year}</td>;
    })
    let array_y = this.addTable(5, 0, a_y).map((array_y,i) => {
      return <tr key={'array_y'+ i}>{array_y}</tr>
    });

    let firstRow = <tr>{( this.state.ShowYearsSelect && <InstructionYears/> ) || 
    ( this.state.ShowMonthSelect && <InstractionMonth/> ) || weekdaysname}</tr>;

    let tables = ( this.state.ShowYearsSelect && array_y ) ||
    ( this.state.ShowMonthSelect && monthname ) || daysinmonth ;
    
    return (
      <table className="calendar">
        <thead>  
          <this.rowYear  yBool = {this.state.ShowYearsSelect}/>
          <this.rowMonth yBool = {this.state.ShowYearsSelect} mBool = {this.state.ShowMonthSelect}/>
        </thead>
        <tbody>
          { firstRow }
          { tables }
        </tbody>
      </table>
    );
  }
}