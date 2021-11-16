import React from 'react'

function SortOption() {
    return (
        <div className="plp-sort-by-container">
            <div className="plp-sort-by-header">
                <button></button>
                <h4>Sort By</h4>
                <p>Select from below</p>
            </div>
            <ul>
                <li>Relavance</li>
                <li>Newest First</li>
                <li>Scheme</li>
                <li>Discount</li>
            </ul>
        </div>
    )
}

export default SortOption
