import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import DailyTimetable from './DailyTimetable/';
import Calendar       from './Calendar/';

import './Menu.scss';

class Main extends React.Component {
    render(){
        return (
        <BrowserRouter>
            <main>
                <Menu />
                <Switch>
                    <Route exact path='/daily-timetable' component={ DailyTimetable }/>
                    <Route exact path='/calendar' component={ Calendar }/>
                    <Route exact path='/notes' component={ Notes }/>
                </Switch>
            </main>
        </BrowserRouter>
        );
    }
}

class Menu extends React.Component{
    render(){
        let menus = [
            "Daily Timetable",
            "Calendar",
            "Notes"
        ]
        return (
        <div className="header">
            <div className="header-conteiner name">DateBook</div>
            <div className="header-conteiner menu">
              <ul className="list-headers">
                  { menus.map((value, index)=> {
                      return <li className="header1" key={index}><Link label={value} /></li>
                  })}
              </ul>
           </div>
        </div>
        );
    }
}

class Link extends React.Component{
    render() {
         const url = "/" + this.props.label.toLowerCase().trim().replace(" ","-");
         return <a href={url}> {this.props.label} </a>
    }
}

class Notes extends React.Component{
    render() {
        return (
            <div>Notes</div>
        )
    }
}

export default Main
