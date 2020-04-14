import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';

class CalendarTable extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
      table: []
    }
  }

  componentWillMount(){
    let daymonth = this.dayMonth();

    this.setState({
      table: daymonth
    });
  }

  componentWillUnmount(){
    let daymonth = this.dayMonth();

    this.setState({
      table: daymonth
    });
  }

  firstDayOfMonth(){
    let dateObject = this.props.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
    return firstDay;
  };
  dayInMonth(){
    return this.props.dateObject.daysInMonth();
  };
  currentDay(){
    return this.props.dateObject.format("D");
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

  arrayDateMonth(){
    return moment.months();
  }
  arrayDateYear(){
    let years = [];
    for(let y = 0; y < 10; y++) {
      years.push(Number(moment().format("Y")) + y);
    }
    return years;
  } 

  dayMonth(){
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
          <td key={i} className="calendar-day empty">{""}</td>
      );
    }
    let daysMonth = [];
    for (let d = 1; d <= this.dayInMonth(); d++) {
      let currentDay = d === this.currentDay() ? "today" : "";   
      daysMonth.push(  
        <td key={'calendar-day' + d} className={`calendar-day ${currentDay}`}>   
          <span>{d}</span>
        </td>
      );
    }
    let arrays_days = [];
    this.addTable(7, blanks, daysMonth).map((dm,i) => {
      arrays_days.push(<tr key={'dm'+ i}>{dm}</tr>);
    });

    return arrays_days;
  };

  addMonth(){
    let row_month = [];
    this.arrayDateMonth().map((am, i) => {
      row_month.push(<td key={i} className="array-name-month" 
      onClick={(e) => this.props.onChangeSelect(e, am, 'month')}>{am}</td>);
    })
    let monthname = [];
    this.addTable(4, 3, row_month ).map((d, i) => {
      monthname.push(<tr key={'d'+ i}>{d}</tr>);
    });

    return monthname;
  };

  addYears(){
    let row_years = [];
    this.arrayDateYear().map((year, i) => {
      row_years.push(<td key={year + i} className="array-year" 
      onClick={(e) => this.props.onChangeSelect(e, year, 'year')}>{year}</td>);
    })
    let array_y = [];
    this.addTable(5, 0, row_years).map((y, i) => {
      array_y.push(<tr key={'array_y'+ i}>{y}</tr>);
    });

    return array_y;
  };

  shouldComponentUpdate(nextProps, nextState){
    let tableCalendar;
    if(this.props !== nextProps && this.state === nextState){
      if(nextProps.ShowYearsSelect){
        tableCalendar = this.addYears();
      } else 
      if(nextProps.ShowMonthSelect){
        tableCalendar = this.addMonth();
      } else 
      if(!nextProps.ShowYearsSelect && !nextProps.ShowMonthSelect){
        tableCalendar = this.dayMonth();
      }
      this.setState({
        table: tableCalendar
      });
    }
    return true;
  }
    
  render(){ 
    return (
      this.state.table
    );
  }
} 

CalendarTable.propTypes = {
  dateObject: PropTypes.object.isRequired,
  ShowYearsSelect: PropTypes.bool.isRequired,
  ShowMonthSelect: PropTypes.bool.isRequired, 
  onChangeSelect: PropTypes.func.isRequired
}

export default CalendarTable;