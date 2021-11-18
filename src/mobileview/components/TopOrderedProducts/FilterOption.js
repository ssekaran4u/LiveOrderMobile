import React from 'react'
import FilterOptionGrid from './FilterOptionGrid'

function FilterOption() {

    return (
        <div>
            <div className="plp-filter-option-header">
                <div className="plp-filter-option-header-flex">
                    <h4>Filter</h4>
                    <p>Clear All</p>
                </div>
                <p>Looking for Filtration, Apply Below</p>
            </div>
            <FilterOptionGrid />
            <div className="plp-bottom-button-div">
                <div className="plp-filter-option-btn-flex">
                    <button className="plp-filter-option-close-btn">Close</button>
                    <button className="plp-filter-option-apply-btn">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default FilterOption
