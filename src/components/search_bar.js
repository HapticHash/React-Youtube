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
                    <img className="logo" src={'https://rawcdn.githack.com/HapticHash/React-Youtube/133530d2885b62fc8fec2bcdf0ea7636d747802d/src/components/images/ytlogo_dark.png'} alt="logo"/>
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