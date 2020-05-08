import React from 'react';

import Record from './Record';

class ListNotes extends React.Component{
     constructor(props){
        super(props);

        this.state = {
            list: []
        }
     }  

     componentDidMount(){
        this.setState({ list: this.props.notes});
     }

     componentWillUnmount(){
        this.setState({ list: []});   
     }

     componentDidUpdate(prevProps){
        if( prevProps.notes !== this.props.notes){
           this.setState({ list: this.props.notes});
        }
     }

     render() {
        let styleList = {gridAutoRows: "minmax(" + 50 +"px, auto)", gridRowGap: 10 + 'px'};
        return (
                <div className='list_notes' style={styleList}>
                        {this.state.list.map((note, index) =>
                                <Record 
                                       key={index} 
                                       id={note.id} 
                                       heading={note.heading}
                                       text={note.text}
                                       editing={note.editing}
                                       show_text={note.show_text}
                                       onDelete={this.props.onDelete}
                                       editText={this.props.editText}
                                       showNote={this.props.showNote}
                                />)  
                        }
                </div>
        );
     }
}

export default ListNotes;