import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render() {
        return (
            <div className="search-bar">
                <div className="inputEnter">
                    <input 
                    placeholder = "Search here..."
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value) } /> 
                </div>
                <div className="logoShow">
                    <img className="logo" src={'http://harshitks.xyz/assets/img/ytlogo_dark.png'} alt="logo"/>
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;