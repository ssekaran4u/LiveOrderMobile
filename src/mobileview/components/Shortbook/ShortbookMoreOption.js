import React from 'react'
import WatchListSearch from '../WatchLists/WatchListSearch'

function ShortbookMoreOption() {
    return (
        <div className="shortbook-more-option">
            <div className="shortbook-more-option-wrapper">
                <ul>
                    <li>Shortbook List Of Vijay Jha</li>
                    <li>Shortbook List Of Vikram Reddy</li>
                    <li>Shortbook List Of Sanjay Kumar</li>
                </ul>
            </div>
            <WatchListSearch />
        </div>
    )
}

export default ShortbookMoreOption
