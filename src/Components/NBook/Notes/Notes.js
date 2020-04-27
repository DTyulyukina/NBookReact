import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Notes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="note">
                <div className="text">
                    note {this.props.id}
                </div>
                <div className="buttons">
                    <Button index={this.props.id} type="update" nameCss="icon-notes" action={this.props.onUpdate}/>
                    <Button index={this.props.id} type="delete" nameCss="icon-notes" action={this.props.onDelete}/>
                </div>
            </div>
        )
    }
}

Notes.propTypes = {
    id: PropTypes.number,
    onDelete: PropTypes.func
}

export default Notes;