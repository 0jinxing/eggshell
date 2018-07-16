import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <input type="text" ref='searchInput' />
                <button ><img src="" alt="搜索" /></button>
            </div>
        );
    }
}


export default SearchBar;