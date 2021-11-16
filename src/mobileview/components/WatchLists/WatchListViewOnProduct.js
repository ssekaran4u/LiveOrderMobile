import React from 'react'
 

//Images
import Notification from "../../../assets/images/notification-watchlist.svg"

function WatchListViewOnProduct() {

    // const [, setIsChecked] = React.useState(false);

    // const handleOnChange = () => {
    // setIsChecked(!isChecked);


    return (
        <div className="mob-watchlist-view-on-product-wrapper">
            <div className="mob-watchlist-view-on-product-flex">
                <button></button>
                <img src={Notification} alt="notification-img" />
                <h3>Great want to get notify?</h3>
                <p>Please Select below option to get notification on product</p>
            </div>
            <div className="mob-watchlist-view-on-product-checkbox-list-container">
                <div className="mob-watchlist-view-on-product-checkbox-list">
                <input type="checkbox" />
                <p>Complete Up & Down Visibility</p>
                </div>
                <div className="mob-watchlist-view-on-product-checkbox-list">
                <input type="checkbox" />
                <p>View on rate</p>
                </div>
                <div className="mob-watchlist-view-on-product-checkbox-list">
                <input type="checkbox" />
                <p>View On Scheme/Discount</p>
                </div>
                <div className="mob-watchlist-view-on-product-checkbox-list">
                <input type="checkbox" />
                <p>Availibility in stock</p>
                </div>
            </div>
        </div>
    )
}

export default WatchListViewOnProduct
