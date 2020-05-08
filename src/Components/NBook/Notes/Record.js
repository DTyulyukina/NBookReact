import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Record extends React.Component{
    constructor(props){
        super(props);

        this.el = document.createElement('div');

        this.updateShowForm = this.updateShowForm.bind(this);
        this.createHtml     = this.createHtml.bind(this);
    }

    updateShowForm(event, id){
        event.preventDefault();
        this.props.editText(id);
    }

    createHtml() {
        return {__html: this.props.heading};
    }

    render(){
        return (
            <div className="note">
                <div className="show_note">
                    <div className="heading">
                       <div dangerouslySetInnerHTML={this.createHtml()} />
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