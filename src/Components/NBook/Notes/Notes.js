import React from 'react';

import Button from './Button';

class Notes extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            edit: false 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let text = event.target[0].value;
        this.props.onUpdate(this.props.id, text);
        this.setState({edit: false});
    }

    updateNote(){
        const style = {
            width: '100%',
            display: 'flex',
            justifyСontent: 'flex-start',
            padding: '5px',
        }
        return (
            <div className="note">
                <form style={style} onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" defaultValue={this.props.text}/>
                    <Button index={this.props.id} icon="save" nameCss="icon-notes"/>
                </form>
            </div>
        );
    }

    defultNote(){
        return (
            <div className="note">
                <div className="text">
                    {this.props.text}
                </div>
                <div className="buttons">
                    <Button index={this.props.id} icon="update" nameCss="icon-notes" action={() => this.setState({edit: true})}/>
                    <Button index={this.props.id} icon="delete" nameCss="icon-notes" action={this.props.onDelete}/>
                </div>
            </div>
        )
    }

    render(){
        return (
            this.state.edit ? this.updateNote() : this.defultNote()    
        )
    }
}

Notes.pr

export default Notes;