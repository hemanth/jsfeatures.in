import React, { Component } from 'react';

class Search extends Component {

    handleKeyup = (e) => {
        const filterCards = this.props.filterCards;
        const searchQuery = e.currentTarget.value;
        filterCards(searchQuery);
    }

    render() {
        return(
            <form className="search-bar">
            <div className="search-bar__icon" aria-label="Search feature">🔍</div>
            <label htmlFor="search" className="search-bar__label">Search features</label>
            <input id="search" className="search-bar__input" type="text" placeholder="Search features" onChange={this.handleKeyup} autoFocus />
        </form>
        )
    }
}

export default Search;