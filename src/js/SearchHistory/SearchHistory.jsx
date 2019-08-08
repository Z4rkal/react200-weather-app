import React, { Component } from 'react';

class SearchHistory extends Component {
    render() {
        const { searchHistory } = this.props;
        return (
            <div className='card border-info'>
                <div className='card-header text-white bg-info'>Search History</div>
                <div className='card-body'>
                    {searchHistory && searchHistory.length != 0 ? (
                        <ul className='list-group'>
                            {searchHistory.map((search,index) => (
                                <li className='list-group-item' key={`${index} ${search.date} ${search.name}`}>
                                    <div className='row justify-content-between'>
                                        <span className='col'>{search.name}</span><span className='col search-time'>{search.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (<p className='card-text'>No searches recorded yet.</p>)}
                </div>
            </div>
        )
    }
}

export default SearchHistory;