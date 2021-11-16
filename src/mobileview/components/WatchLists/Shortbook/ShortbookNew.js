import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { makeStyles } from '@mui/styles';

import ShortbookMoreOption from './ShortbookMoreOption';

//Images
import ProductImg1 from "../../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../../assets/mobImages/item4.png";
import shopping from "../../../../assets/mobImages/commerce_and_shopping.svg"
import wishlist from "../../../../assets/mobImages/wishlist-white/wishlist.png"


function ShortbookNew() {

    const useStyles = makeStyles({
        spacing : {
            marginTop: '12px',
            backgroundColor: '#f4f9f9',
            borderRadius: '4px',
            padding: '12px 0px'
        }
    })

    const classess = useStyles();


    return (
        <>
            <Box sx={{
                    display : 'flex',
                    justifyContent: 'space-between',
                    marginTop: '16px',
                    fontFamily: 'Quicksand-Medium',
                    fontSize: '12px',
                    color: '#2e3e6a',
                    }}>
                    <Typography variant='h6' className="shortbook-page-title">My Shortbook List</Typography>
                    <MoreVertTwoToneIcon />
                </Box>
                {/* <div className="orders-popUp">
                    <h6>Calpol 500mg tablet successfully removed</h6>
                </div> */}
                <Grid container spacing={2}>
                    <Grid item xs={6} spacing={2} >
                        <div className={classess.spacing}>
                            <div className="icon-container">
                                <img src={shopping} alt="discount" />
                                <button className="icon-container-button"><ClearIcon sx={{float: 'right'}} /></button>
                            </div>
                                <img src={ProductImg1} alt="img1" className="watchlist-image"/>
                                <Typography variant='subtitle1' className="watchlist-productTitle">Refort200mlSyrup</Typography>
                                <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                                <Typography variant='subtitle2' className="watchlist-mrp" sx={{fontSize: '12px'}}>MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                                <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                                <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                                <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                                <div className="shortbook-container">
                                <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                    <img src={wishlist} alt="wishlist"/>
                                </div>
                        </div>    
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                        <button className="icon-container-button2"><ClearIcon sx={{float: 'right'}} /></button>
                            <img src={ProductImg2} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">Cremaffin Plus Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={wishlist} alt="wishlist"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                        <button className="icon-container-button2"><ClearIcon sx={{float: 'right'}} /></button>
                            <img src={ProductImg3} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">ChildLife Cough Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={wishlist} alt="wishlist"/>
                            </div>
                        </div>                   
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                        <button className="icon-container-button2"><ClearIcon sx={{float: 'right'}} /></button>
                            <img src={ProductImg4} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">Vasu Step Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                                <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={wishlist} alt="wishlist"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* <ShortbookMoreOption /> */}
        </>
    )
}

export default ShortbookNew
