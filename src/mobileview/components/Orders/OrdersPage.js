import React from 'react'
import { Container, Box, Typography, Grid, Button } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import FilterOption from "../TopOrderedProducts/FilterOption"
import Modal from 'react-modal'
import SellerOption from '../Shortbook/SellerOption'

//Images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import shortbook from "../../../assets/mobImages/shortbook-white/shortbook.png"
import shortbookPurple from "../../../assets/mobImages/shortbook.png"
import wishlistPurple from "../../../assets/mobImages/wishlist-white/wishlist_1.png"
import shopping from "../../../assets/mobImages/commerce_and_shopping.svg"
import wishlist from "../../../assets/mobImages/wishlist-white/wishlist.png"
import filter from "../../../assets/mobImages/filter-black/filter.png"

function OrdersPage() {

    const[modalOpen, setModalOpen] = React.useState(false)
    const[addModal, setAddModal] = React.useState(false)
    const[shortbookModal, setShortbookModal] = React.useState(false)
    const[sellerModal, setSellerModal] = React.useState(false)


    const FilterModal =  () => {
        setModalOpen(!modalOpen) 
    }

    const AppendImage = (e) => {
        e.target.setAttribute('src', `${wishlistPurple}`);
        e.target.setAttribute('alt', 'wishlist-puple');
        setAddModal(!addModal);
    }


    const ShortbookImage = (e) => {
        e.target.setAttribute('src', `${shortbookPurple}`);
        e.target.setAttribute('alt', 'shortbook-puple');
        setShortbookModal(!shortbookModal)
    }

    const TogglingSeller = () => {
        setSellerModal(!sellerModal)
    }

    const useStyles = makeStyles({
        spacing : {
            marginTop: '12px',
            backgroundColor: '#f4f9f9',
            borderRadius: '4px',
            padding: '12px 0px'
        },
        modalWrapper: {
            backgroundColor: '#272727',
            position: 'absolute',
            top: '73vh',
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
        sellerOption : {
            position: 'static   ',
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

    const customStyles = {
        content : {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#fff',
          padding: 0
        }
    }

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
                    <Typography variant='h6' className="shortbook-page-title">Frequently Ordered/Smart Order</Typography>
                    <SearchIcon className="mob-watchlist-search-icon" />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} spacing={1}>
                        <div className={classess.spacing}>
                        <div className="orders-icon-container1">
                                <img src={shopping} alt="discount" />
                                <img onClick={AppendImage} src={wishlist} alt="fav" />
                                <Modal isOpen={addModal} className={classess.modalWrapper}
                                onRequestClose={() => setAddModal(!addModal)}>
                                <div className={classess.contentWrapper}><p className={classess.content}>Refort 200ml Syrup Added In Watchlist</p></div>
                                </Modal>                           
                         </div>
                                <img src={ProductImg1} alt="img1" className="watchlist-image"/>
                                <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Refort 200ml Syrup</Typography>
                                <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                                <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                                <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                                <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller}>Mahaveer Medi...</span> </Typography>
                                <Modal isOpen={sellerModal} onRequestClose={()=>setSellerModal(!sellerModal)} 
                                className={classess.sellerOption} overlayClassName={classess.sellerOptionOverlay}>
                                    <SellerOption />
                                </Modal>
                                <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                                <div className="shortbook-container">
                                <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                    <img onClick={ShortbookImage} src={shortbook} alt="shortbook"/>
                                    <Modal isOpen={shortbookModal} className={classess.modalWrapper}
                                    onRequestClose={() => setShortbookModal(!shortbookModal)}>
                                    <div className={classess.contentWrapper}><p className={classess.content}>Refort 200ml Syrup Added In Shortbook</p></div>
                                    </Modal>
                                </div>
                        </div>    
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                            <div className="orders-icon-container">
                                <img onClick={AppendImage} src={wishlist} alt="fav" />
                            </div> 
                            <img src={ProductImg2} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Cremaffin Plus Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller}>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img onClick={ShortbookImage} src={shortbook} alt="shortbook"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                            <div className="orders-icon-container">
                                <img onClick={AppendImage} src={wishlist} alt="fav" />
                            </div> 
                            <img src={ProductImg3} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">ChildLife Cough Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller}>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img onClick={ShortbookImage} src={shortbook} alt="shortbook"/>
                            </div>
                        </div>                   
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classess.spacing}>
                            <div className="orders-icon-container">
                                <img onClick={AppendImage} src={wishlist} alt="fav" />
                            </div> 
                            <img src={ProductImg4} alt="img1" className="watchlist-image"/>
                            <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Vasu Step Syrup</Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
                            <Typography variant='subtitle2' className="watchlist-mrp">MRP <p style={{textDecoration: 'line-through', margin: '0'}}>₹00.00</p><span>Scheme 10 + 2</span></Typography>
                            <Typography variant='subtitle1' className="watchlist-total">₹ 57.00 </Typography>
                            <Typography variant='body' className="watchlist-seller-name">Pre Seller : <span onClick={TogglingSeller}>Mahaveer Medi...</span> </Typography>
                            <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                            <div className="shortbook-container">
                            <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                                <img onClick={ShortbookImage} src={shortbook} alt="shortbook"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div>
                    <div className="filter-container">
                        <img src={filter} alt="filt" />
                        <h6 onClick={FilterModal}>Filter</h6>
                        <Modal isOpen={modalOpen} style={customStyles}> 
                             <FilterOption open={modalOpen} onOpen={setModalOpen} />
                        </Modal>
                    </div>
                </div>
        </Container>
    )
}

export default OrdersPage
