import React from 'react';

import Button from './Button';
import Form   from './Form';

class Notes extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            edit: false 
        }
    }
    render(){
        return (
            this.state.edit 
            ?
            <div className="note">
                <Form typeForm="edit"/>
            </div>
            :
            <div className="note">
                <div className="text">
                    {this.props.text}
                </div>
                <div className="buttons">
                    <Button index={this.props.id} type="update" nameCss="icon-notes" action={() => this.setState({edit: true})}/>
                    <Button index={this.props.id} type="delete" nameCss="icon-notes" action={this.props.onDelete}/>
                </div>
            </div>
        )
    }
}

export default Notes;