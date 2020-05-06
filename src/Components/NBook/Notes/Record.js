import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Record extends React.Component{
    constructor(props){
        super(props);

        this.updateShowForm = this.updateShowForm.bind(this);
    }

    updateShowForm(event, id){
        event.preventDefault();
        this.props.editForm(id);
    }

    render(){
        return (
            <div className="note">
                <div className="show_note">
                    <div className="heading">
                        {this.props.heading}
                    </div>
                    <div className="buttons">
                        { this.props.editing === true ? 
                          <Button index={this.props.id} icon="arrow_up"   nameCss="icon-notes" action={this.props.showNote}/> :
                          <Button index={this.props.id} icon="arrow_down" nameCss="icon-notes" action={this.props.showNote}/>}
                        <Button index={this.props.id} icon="update" nameCss="icon-notes" action={this.updateShowForm}/>
                        <Button index={this.props.id} icon="delete" nameCss="icon-notes" action={this.props.onDelete}/>
                    </div>
                </div>
                { this.props.show_text === true ? 
                    <div className="text">
                        {this.props.text}
                    </div> 
                    : ''}
            </div>    
        )
    }
}

Record.propTypes = {
    id: PropTypes.number,
    heading: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.func
}

export default Record;