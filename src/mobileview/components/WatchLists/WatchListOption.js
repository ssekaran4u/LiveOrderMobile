import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

//Images
import Delete from "../../../assets/mobImages/delete.svg"

function WatchListOption() {
    return (
        <div className="mob-watchlist-search2">
            <div className="mob-watchlist-view-on-product">
                <VisibilityOutlinedIcon />
                <h6>View On Product</h6>
            </div>
            <div className="mob-watchlist-remove-from-list">
                <img src={Delete} alt="Search-icon" />
                <h6>Remove From Watchlist</h6>
            </div>
        </div>
    )
}

export default WatchListOption
