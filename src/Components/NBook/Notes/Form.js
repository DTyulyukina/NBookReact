import React from 'react';

import Button from './Button';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAdd(event.target.lastChild.value);
        event.target.lastChild.value = '';
    }

    render(){
        return (
            <div className="form-notes">
                <div className="editing">
                    <form className="form-list" onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="buttom-editor">
                            <Button icon="add" type="submit" nameCss="icon-save"/>
                        </div>
                        <textarea name="text" placeholder="New note" required form="text" ></textarea>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form; 