import React from 'react'

//Images
import Search from "../../../assets/mobImages/search-grey/search.png"

function WatchListSearch() {
    return (
        <div className="mob-watchlist-search">
            <div className="mob-watchlist-search-container">
                <img src={Search} alt="Search-icon" />
                <input type="text" placeholder="Search watchlist products" />
            </div>
        </div>
    )
}

export default WatchListSearch
