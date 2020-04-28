import React from 'react';

import Button from './Button';

class Form extends React.Component{
    render(){
        return (
            <div className="form-notes">
                <form>
                    <textarea name="comment" placeholder="Комментарий" required form="text"></textarea>
                    <Button index={this.props.id} icon="save" nameCss="icon-notes"/>
                </form>
            </div>
        );
    }
}

export default Form; 