import React from 'react'
import { Box, Typography, Grid, Button, Container} from '@material-ui/core'
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { makeStyles } from '@mui/styles';

import ShortbookMoreOption from './ShortbookMoreOption'

import SellerOption from './SellerOption'

//Images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import shopping from "../../../assets/mobImages/commerce_and_shopping.svg"
import wishlist from "../../../assets/mobImages/wishlist-white/wishlist.png"

import Modal from 'react-modal'


function ShortbookNew() {

    const[ removeModal, setRemoveModal] = React.useState(false)
    const[ optionModal, setOptionModal] = React.useState(false)
    const[ sellerModal, setSellerModal] = React.useState(false)

    const RemoveProduct = () => {
        setRemoveModal(!removeModal)
    }

    const TogglingOption = () => {
        setOptionModal(!optionModal)
    }

    const TogglingSeller = () => {
        setSellerModal(!sellerModal)
    }

    const useStyles = makeStyles({
        spacing : {
            marginTop: '8px',
            backgroundColor: '#f4f9f9',
            borderRadius: '4px',
            padding: '12px 0px'
        },
        modalWrapper: {
            backgroundColor: '#272727',
            position: 'absolute',
            top: '77vh',
            left: '8vh',
            right: '8vh',
            padding: '20px',
            border: 'none',
            borderRadius: '4px'
        },
        contentWrapper: {
            position: 'absolute',
            top: '10px',
            left: 0,
            right: 0,
        },
        content: {
            fontFamily: 'Quicksand-Medium',
            color: '#fff',
            fontSize: '11px',
            textAlign: 'center',
            backgroundColor: '#272727'
        },
        optionModalWrapper: {
            position: 'fixed',
            top: '77vh',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px',
            backgroundColor: '#fff'
        },
        overlay: {
            backgroundColor: 'rgba(9, 36, 72, 0.54)',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        removeOverlay : {
            backgroundColor : 'rgba( 255, 255, 255, 0.5)'
        },
        sellerOption : {
            position: 'fixed',
            top: '20vh',
            right: 0,
            left: 0,
            bottom: 0,
            border: '1px solid #dbdbdb',
            borderRadius: '30px 30px 0 0',
            padding: '16px',
        },
        sellerOptionOverlay : {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
    })

    const classess = useStyles();


    return (
        <Container>
            <Box sx={{
                    display : 'flex',
                    justifyContent: 'space-between',
                    marginTop: '16px',
                    fontFamily: 'Quicksand-Medium',
                    fontSize: '12px',
                    color: '#2e3e6a',
                    }}>
                    <Typography variant='h6' className="shortbook-page-title">My Shortbook List</Typography>
                    <MoreVertTwoToneIcon onClick={TogglingOption} />
                    <Modal isOpen={optionModal} onRequestClose={() => setOptionModal(!optionModal)}
                    className={classess.optionModalWrapper}
                    overlayClassName={classess.overlay}
                    >
                        <ShortbookMoreOption />
                    </Modal>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} spacing={2} >
                        <div className={classess.spacing}>
                            <div className="icon-container">
                                <img src={shopping} alt="discount" />
                                <button className="icon-container-button" onClick={RemoveProduct}><ClearIcon sx={{float: 'right'}} /></button>
                                <Modal isOpen={removeModal} className={classess.modalWrapper}
                                onRequestClose={() => setRemoveModal(!removeModal)}
                                >
                                <div className={classess.contentWrapper}><p className={classess.content}>Calpol 500mg tablet successfully removed</p></div>
                                </Modal>
                            </div>
                                <img src={ProductImg1} alt="img1" className="watchlist-image"/>
                                <Typography variant='subtitle1' className="watchlist-productTitle">Refort200mlSyrup</Typography>
                                <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                                <Typography variant='subtitle2' className="watchlist-mrp" sx={{fontSize: '12px'}}>MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                                <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                                <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller}>Mahaveer Medi...</span> </Typography>
                                <Modal isOpen={sellerModal} onRequestClose={()=>setSellerModal(!sellerModal)} 
                                className={classess.sellerOption} overlayClassName={classess.sellerOptionOverlay}>
                                    <SellerOption />
                                </Modal>
                                <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                                <div className="shortbook-container">
                                <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                    <img src={wishlist} alt="wishlist"/>
                                </div>
                        </div>    
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                        <button className="icon-container-button2" onClick={RemoveProduct}><ClearIcon sx={{float: 'right'}} /></button>
                            <img src={ProductImg2} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">Cremaffin Plus Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller} >Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={wishlist} alt="wishlist"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                        <button className="icon-container-button2" onClick={RemoveProduct}><ClearIcon sx={{float: 'right'}} /></button>
                            <img src={ProductImg3} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">ChildLife Cough Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller}>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={wishlist} alt="wishlist"/>
                            </div>
                        </div>                   
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                        <button className="icon-container-button2" onClick={RemoveProduct}><ClearIcon sx={{float: 'right'}} /></button>
                            <img src={ProductImg4} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">Vasu Step Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller}>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                                <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={wishlist} alt="wishlist"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
        </Container>
    )
}

export default ShortbookNew
