import React from 'react';
import PropTypes from 'prop-types';

import Delete            from '@material-ui/icons/Delete';
import Edit              from '@material-ui/icons/Edit';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon   from '@material-ui/icons/ArrowDropUp';

function Button(props){
    switch(props.icon){
        case "delete":
            return (
                <button name={props.index} 
                        className={props.nameCss} 
                        onClick={() => props.action(props.index)}>
                    <Delete>{props.icon}</Delete>
                </button>
            );
        case "update":
            return (
                <button name={props.index} 
                        className={props.nameCss} 
                        onClick={(event) => props.action(event, props.index)}>
                    <Edit>{props.icon}</Edit>
                </button>
            );
        case "add":
            return (
                <button name={props.index} type={props.type}
                        className={props.nameCss}>Save
                </button>
            );
        case "update_form":
            return (
                <button name={props.index} 
                        className={props.nameCss}>Update
                </button>
            ); 
        case "arrow_down":
            return (
                <button name={props.index} 
                        className={props.nameCss}
                        onClick={() => props.action(props.index)}>
                            <ArrowDropDownIcon>Arrow</ArrowDropDownIcon>
                </button>
            );     
        case "arrow_up":
            return (
                <button name={props.index} 
                        className={props.nameCss}
                        onClick={() => props.action(props.index)}>
                            <ArrowDropUpIcon>Arrow</ArrowDropUpIcon>
                </button>
            ); 
            
        default:
            return (
                <p>Not element...</p>
            );

    } 
}

Button.propTypes = {
    index: PropTypes.number,
    icon: PropTypes.string,
    nameCss: PropTypes.string,
    action: PropTypes.func,
    text: PropTypes.string
}

export default Button;