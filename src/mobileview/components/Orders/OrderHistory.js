import React from 'react'
import {Container, Grid, Divider} from '@material-ui/core'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Modal from 'react-modal'
import { makeStyles } from '@mui/styles';

//Images
import MahaveerLogo from "../../../assets/images/mahaveer.png"
import Filter from "../../../assets/mobImages/path_2650.png"
import Calendar from "../../../assets/images/calendar.svg"

function OrderHistory() {

    const[ optionModal, setOptionModal] = React.useState(false)

    const TogglingModal = () => {
        setOptionModal(!optionModal)
    }

    const useStyles = makeStyles({
        optionModalWrapper : {
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 36, 72, 0.54)'
        },
        optionModalStyle : {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fff'
        }
    })

    const classess = useStyles()

    return (
        <Container>
            <div>
                {/* <div className="header-flex">
                    <h4>All Orders</h4>
                    <h4>Frequently Ordered / Smart Order</h4>
                </div> */}
                <div className="header2-flex">
                    <h4>Last 6 Months Order</h4>
                    <MoreVertTwoToneIcon sx={{ position: 'relative', left: '12px'}} onClick={TogglingModal} />
                    <Modal isOpen={optionModal} onRequestClose={()=> setOptionModal(!optionModal)}
                     className={classess.optionModalStyle} overlayClassName={classess.optionModalWrapper}>
                        <div className="modal-for-option">
                            <div className="option-modal-flex">
                               <img src={Filter} alt="filter-icon"/>
                               <p>Retrieval Filter/option </p>
                            </div>
                            <Divider sx={{width: '344px'}}/>
                            <div className="option-modal-flex">
                               <img src={Calendar} alt="calendar-icon"/>
                               <p>dd/mm/yy To dd/mm/yy</p>
                            </div>
                        </div>
                    </Modal>
                </div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <div className="logo-flex">
                            <img src={MahaveerLogo} alt="logo" />
                            <button className="view-btn">View</button>
                        </div>
                    </Grid>
                    <Grid item xs={8} className="shop-details-flex">
                        <div className="grid-header">
                            <h4>Mahaveer Medi Sales</h4>
                            <h5>₹ 10,056.00</h5>
                        </div>
                        <div className="grid-sub-header">
                           <h4>(Order Id: MAHA094bh88748)</h4>
                           <h4>Ordered Date : 26-08-2020 </h4>
                        </div>
                        <div className="span-flex">
                            <h4>3 Items | </h4><span className="span1">Outstanding</span><span className="span2">Amount:</span><span className="span3"> ₹ 10,056.00</span>
                        </div>
                    </Grid>
                </Grid>
                <div className="shop-header">
                    <h4>Ships to Maruthi Medicals <span>(Jayanagar)</span></h4>
                </div>
                <div className="order-tracking-container">
                    <div className="order-tracking">
                        <div className="order-styles-flex">
                            <div className="order-dot">
                                <div className="order-inner-dot">
                                    <div className="order-inner-dot2"></div>
                                </div>
                            </div>
                            <h6>order confirmed</h6>    
                        </div>
                        <div className="order-line"></div>
                    </div>
                    <div className="order-tracking">
                        <div className="order-styles-flex">
                            <div className="order-dot">
                                <div className="order-inner2-dot">
                                    <div className="order-inner2-dot2"></div>
                                </div>
                            </div>
                            <h6>Processing</h6>    
                        </div>
                        <div className="order-line2"></div>
                    </div>
                    <div className="order-tracking">
                        <div className="order-styles-flex">
                            <div className="order-dot">
                                <div className="order-inner2-dot">
                                    <div className="order-inner2-dot2"></div>
                                </div>
                            </div>
                            <h6>Order Invoiced</h6>    
                        </div>
                        <div className="order-line2"></div>
                    </div>
                    <div className="order-tracking">
                        <div className="order-styles-flex">
                            <div className="order-dot">
                                <div className="order-inner2-dot">
                                    <div className="order-inner2-dot2"></div>
                                </div>
                            </div>
                            <h6>Order Dispatched</h6>    
                        </div>
                        <div className="order-line2"></div>
                    </div>
                    <div className="order-tracking">
                        <div className="order-styles-flex">
                            <div className="order-dot">
                                <div className="order-inner2-dot">
                                    <div className="order-inner2-dot2"></div>
                                </div>
                            </div>
                            <h6>Delivering on <span className="delivery-date">Friday, 18 Sep</span></h6>    
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OrderHistory
