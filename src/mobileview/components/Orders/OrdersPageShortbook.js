import React from 'react'
import { Container, Box, Typography, Grid, Button } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';


//Images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import shortbook from "../../../assets/mobImages/shortbook-white/shortbook.png"
import shortbookPurple from "../../../assets/mobImages/shortbook.png"
import shopping from "../../../assets/mobImages/commerce_and_shopping.svg"
import wishlist from "../../../assets/mobImages/wishlist-white/wishlist.png"
import filter from "../../../assets/mobImages/filter-black/filter.png"

function OrdersPageShortbook() {

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
        <Container className="orders-page">
                <Box sx={{
                    display : 'flex',
                    justifyContent: 'space-between',
                    marginTop: '16px',
                    fontFamily: 'Quicksand-Medium',
                    fontSize: '12px',
                    color: '#2e3e6a',
                    }}>
                    <Typography variant='h6'>Frequently Ordered/Smart Order</Typography>
                    <SearchIcon className="mob-watchlist-search-icon" />
                </Box>
                <div className="orders-popUp">
                    <h6>Refort 200ml Syrup Added In Shortbook</h6>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6} spacing={1}>
                        <div className={classess.spacing}>
                        <div className="orders-icon-container1">
                                <img src={shopping} alt="discount" />
                                <img src={wishlist} alt="fav" />
                            </div>
                                <img src={ProductImg1} alt="img1" className="watchlist-image"/>
                                <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Refort 200ml Syrup</Typography>
                                <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                                <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                                <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                                <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span>Mahaveer Medi...</span> </Typography>
                                <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                                <div className="shortbook-container">
                                <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                    <img src={shortbookPurple} alt="shortbook"/>
                                </div>
                        </div>    
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                            <div className="orders-icon-container">
                                <img src={wishlist} alt="fav" />
                            </div> 
                            <img src={ProductImg2} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Cremaffin Plus Syrup</Typography>
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
                            <div className="orders-icon-container">
                                <img src={wishlist} alt="fav" />
                            </div> 
                            <img src={ProductImg3} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">ChildLife Cough Syrup</Typography>
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
                            <div className="orders-icon-container">
                                <img src={wishlist} alt="fav" />
                            </div> 
                            <img src={ProductImg4} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Vasu Step Syrup</Typography>
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
                <div>
                    <div className="filter-container">
                        <img src={filter} alt="filt" />
                        <h6>Filter</h6>
                    </div>
                </div>
        </Container>
    )
}

export default OrdersPageShortbook
