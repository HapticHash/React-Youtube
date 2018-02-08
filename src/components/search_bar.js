import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render() {
        return (
            <div className="search-bar">
            <img class="logo" src={'https://image.jimcdn.com/app/cms/image/transf/none/path/s9b2bb88c43e4b9c3/image/i0f933d1041a5ab44/version/1508573050/image.png'} alt="logo"/>
                <input 
                placeholder = "Search here..."
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value) } /> 
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;