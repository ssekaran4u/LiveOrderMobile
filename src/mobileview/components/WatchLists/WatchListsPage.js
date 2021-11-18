import React from 'react'
import { Container, Box, Typography, Grid, Button } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { makeStyles } from '@mui/styles';

import WatchListSearch from "./WatchListSearch"
import WatchListViewOnProduct from './WatchListViewOnProduct';
import WatchListOption from "./WatchListOption"

//Shortbook
import ShortbookPage from "./Shortbook/ShortbookPage"

//Images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import shortbook from "../../../assets/mobImages/shortbook-white/shortbook.png"
import shopping from "../../../assets/mobImages/commerce_and_shopping.svg"
import WatchListItemRemoved from './WatchListItemRemoved';

function WatchListsPage() {

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
        <Container>
                <Box sx={{
                    display : 'flex',
                    justifyContent: 'space-between',
                    marginTop: '16px',
                    fontFamily: 'Quicksand-Medium',
                    fontSize: '12px',
                    color: '#2e3e6a',
                    }}>
                    <Typography variant='h6' className="shortbook-page-title">All Products</Typography>
                    <SearchIcon className="mob-watchlist-search-icon" />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} spacing={2} >
                        <div className={classess.spacing}>
                            <div className="icon-container">
                                <img src={shopping} alt="discount" />
                                <MoreVertTwoToneIcon />
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
                                    <img src={shortbook} alt="shortbook"/>
                                </div>
                        </div>    
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                            <MoreVertTwoToneIcon sx={{float: 'right'}} />
                            <img src={ProductImg2} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">Cremaffin Plus Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={shortbook} alt="shortbook"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                            <MoreVertTwoToneIcon sx={{float: 'right'}} />
                            <img src={ProductImg3} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">ChildLife Cough Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={shortbook} alt="shortbook"/>
                            </div>
                        </div>                   
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                            <MoreVertTwoToneIcon sx={{float: 'right'}} />
                            <img src={ProductImg4} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' className="watchlist-productTitle">Vasu Step Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                                <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img src={shortbook} alt="shortbook"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* <WatchListSearch /> */}
                {/* <WatchListOption /> */}
                {/* <WatchListViewOnProduct /> */}
                {/* <WatchListItemRemoved /> */}
                {/* <ShortbookPage /> */}
        </Container>
    )
}

export default WatchListsPage
