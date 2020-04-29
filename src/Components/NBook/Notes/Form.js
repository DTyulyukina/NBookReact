import React from 'react';

import Button from './Button';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.store = this.props.store;
    }

    unsubscribe(){
        this.store.subscribe(() => this.forceUpdate());
    }

    componentDidMount(){
        this.unsubscribe();
    }

    componentWillMount(){
        this.unsubscribe();
    }

    render() {
        console.log(this.props.store.getState());
        return (
            <div className="form-notes">
                <div className="editing">
                    <form className="form-list">
                        <div className="buttom-editor">
                            <Button index={this.props.id} icon="save" nameCss="icon-save"/>
                        </div>
                        <textarea name="text" placeholder="New note" required form="text" ></textarea>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form; 