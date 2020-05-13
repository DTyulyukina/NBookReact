import React from 'react';

import Button from './Button';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            id: null,
            value_heading: '',
            value_text: '',
            format: '',
            value_focus: ''
        }

        this.handleSubmit  = this.handleSubmit.bind(this);
        this.handeleUpdate = this.handeleUpdate.bind(this);
        this.formNewNote    = this.formNewNote.bind(this);
        this.formUpdateNote = this.formUpdateNote.bind(this);

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeHead = this.handleChangeHead.bind(this);

        this.addButtomFormatText = this.addButtomFormatText.bind(this);

        this.focusInputText = this.focusInputText.bind(this);
    }

    componentDidMount(){
        this.setState({
            edit: false,
            id: null,
            value_heading: '',
            value_text: '',
            format: '',
            value_focus: ''
        })
    }

    componentWillUnmount(){
        this.setState({
            edit: false,
            id: null,
            value_heading: '',
            value_text: '',
            format: '',
            value_focus: ''
        });
    }

    componentDidUpdate(prevProps, prevState){
        if( prevProps !== this.props ){
            if( (prevState.value_heading !== this.state.value_heading && prevState.value_heading !== []) || 
            (prevState.value_text !== this.state.value_text && prevState.value_text !== [])){
                this.setState({
                    edit: false
                });
            } else {
                for( let note of this.props.notes.datas){
                    if(note.editing === true){
                        this.setState({
                            edit: !this.state.edit,
                            id: note.id,
                            value_heading: note.heading,
                            value_text: note.text
                        });
                    }
                }
            }
        }
    }

    handleSubmit(event){
        if(this.state.value_heading!=='' || this.state.value_text!==''){
            this.props.onAdd(this.state.value_heading, this.state.value_text);
            this.setState({
                id: null,
                value_heading: '',
                value_text: '',
                format: '',
                value_focus: ''
            });
            event.target[0].value = '';
            event.target[0].nextElementSibling.value = '';
        }
        event.preventDefault();
    }

    handeleUpdate(event, id){
        if(this.state.value_heading!=='' || this.state.value_text!==''){
            this.props.onUpdate(id, this.state.value_heading, this.state.value_text);
            event.target[0].value = '';
            event.target[0].nextElementSibling.value = '';
            this.setState({
              id: null,
              value_heading: '',
              value_text: '',
              format: '',
              value_focus: ''
            });
        }
        event.preventDefault();
    }

    handleChangeText(event){
        this.setState({
            value_text: event.target.value
        })
        event.preventDefault();
    }

    handleChangeHead(event){
        this.setState({
            value_heading: event.target.value
        })
        event.preventDefault();
    }
    
    getSelection(event){
        if(this.state.value_heading){
            let start = this.input.selectionStart;
            let end   = this.input.selectionEnd;
            let str   = this.input.value.substring(start, end);
            if( str !== '' ){
                this.setState({
                    value_focus: str.trim()
                })
            }
        }
        event.preventDefault();
    }

    focusInputText(event, format){
        if(this.state.value_focus !== ''){
            if(format === 'italic'){
                this.setState({
                    value_heading: this.input.value.replace(this.state.value_focus, '' ) + ' <em>' + this.state.value_focus +'</em>'
                })
            } else if(format === 'strong'){
                this.setState({
                    value_heading: this.input.value.replace(this.state.value_focus, '' ) + ' <strong>' + this.state.value_focus +'</strong>'
                })
            } else if(format === 'border'){
                this.setState({
                    value_heading: this.input.value.replace(this.state.value_focus, '' ) + ' <u>' + this.state.value_focus +'</u>'
                })
            }
        }
        event.preventDefault();
    }

    formNewNote(){
        return (
            <div className="form-notes">
                {this.addButtomFormatText()}
                <div className="editing">
                    <form className="form-list" onSubmit={(event) => this.handleSubmit(event)}>
                        <input type="text" placeholder="New title note" value={this.state.value_heading}
                                                                        ref={ref => this.input = ref}
                                                                        onChange={(event) => this.handleChangeHead(event)}
                                                                        onMouseUp={(event) => this.getSelection(event)}/>
                        <textarea name="text" placeholder="New text note" required form="text" value={this.state.value_text} 
                                                                          onChange={(event) => this.handleChangeText(event)}/>
                        <div className="buttom-editor">
                            <Button icon="add" type="submit" nameCss="icon-save" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    formUpdateNote(){
        return (
            <div className="form-notes">
                {this.addButtomFormatText()}
                <div className="editing">
                    <form className="form-list" onSubmit={(event) => this.handeleUpdate(event, this.state.id)}>
                        <input type="text" value={this.state.value_heading}
                                           ref={ref => this.input = ref}
                                           onChange={(event) => this.handleChangeHead(event)}
                                           onMouseUp={(event) => this.getSelection(event)}/>
                        <textarea name="text" required form="text" value={this.state.value_text} 
                                           onChange={(event) => this.handleChangeText(event)}/>
                        <div className="buttom-editor">
                            <Button icon="update_form" type="submit" nameCss="icon-save"/>
                        </div>
                    </form>
                </div>
            </div>
        )    
    }

    addButtomFormatText(){
        return (
            <div className="format-text">
                Format text title:
                <button className="font-style" onClick={(event) => this.focusInputText(event, 'italic')}><em>ft</em></button>
                <button className="font-style" onClick={(event) => this.focusInputText(event, 'strong')}><b>ft</b></button>
                <button className="font-style" onClick={(event) => this.focusInputText(event, 'border')}><u>ft</u></button>
            </div>
        )
    }

    render(){
        return (
             this.state.edit !== false ? this.formUpdateNote() : this.formNewNote()
        )
    }
}

export default Form; 