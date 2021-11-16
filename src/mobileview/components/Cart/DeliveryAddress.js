import * as React from "react";
import Button from "@material-ui/core/Button";

//images
import LocationPinIcon from "../../../assets/mobImages/pin.png"
import Shop from "../../../assets/mobImages/shop-purple.png"

import SelectDeliveryAddress from "./SelectDeliveryAddress";

export const DeliveryAddress = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (
    event,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <div className="mob-delivery-address-wrapper">
      <div className="mob-delivery-address-sec">
        <img src={LocationPinIcon} alt="LocationPinIcon" />
        <div className="mob-delivery-address-text">
          <h4><span>Deliver to</span><br/>Maruthi Medical, 69, 2nd Floor - 560027</h4>
        </div>
        <div>
          <Button variant="outlined" className="mob-addressChange-btn" onClick={toggleDrawer(true)}>
            Edit
          </Button>
        </div>
      </div>
      <div className="mob-delivery-address-sec2">
        <img src={Shop} width="16px" height= "16px" alt="shopIcon" />
        <div className="mob-delivery-address-text">
          <h4><span>Ordering For Branch</span><br/>Maruthi Medicals, Jayanagar</h4>
        </div>
        <div>
          <Button variant="outlined" className="mob-addressChange-btn" onClick={toggleDrawer(true)}>
            Change
          </Button>
        </div>
      </div>
      <SelectDeliveryAddress toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
    </div>
  )
}

export default DeliveryAddress;