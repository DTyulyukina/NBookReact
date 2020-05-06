import { connect } from 'react-redux';

import Search from '../Search';
import { setFilterNote } from '../action';

function mapStateToProps(state){
    return {
        searchNote: state.search
    };
}

function mapDispatchToProps(dispatch){
    return {
        onSearch: search => dispatch(setFilterNote(search))
    };
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;