import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { Container, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles';

import ProductImg from "../../../assets/images/injectable.svg";

import shortbook from "../../../assets/mobImages/shortbook-grey/shortbook.png"
import wishlist from "../../../assets/mobImages/wishlist.png"


function ProductVarients() {

    const useStyles = makeStyles({
        spacing : {
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
          </Box>
          <Grid container spacing={2}>
              <Grid item xs={6} spacing={1}>
                  <div className={classess.spacing}>
                  <div className="orders-icon-container">
                          <img src={wishlist} alt="fav" />
                      </div>
                          <img src={ProductImg} alt="img1" className="watchlist-image"/>
                          <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle2">Abilify(aripiprazole) I…</Typography>
                          <Typography variant='body' className="watchlist-sub-heading">Pack Size: 10 ml bottle</Typography>
                          <Typography variant='subtitle2' className="plp-mrp2">MRP ₹80.00 <span className="plp-mrp2" style={{ marginRight: '8px'}}>GST: 12% </span></Typography>
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
                      <img src={ProductImg} alt="img1" className="watchlist-image"/>
                      <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle2">Abilify(aripiprazole) I…</Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Pack Size: 10 ml bottle</Typography>
                      <Typography variant='subtitle2' className="plp-mrp2">MRP ₹80.00 <span className="plp-mrp2" style={{ marginRight: '8px'}}>GST: 12% </span></Typography>
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
                      <img src={ProductImg} alt="img1" className="watchlist-image"/>
                      <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle2">Abilify(aripiprazole) I…</Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Pack Size: 10 ml bottle</Typography>
                      <Typography variant='subtitle2' className="plp-mrp2">MRP ₹80.00 <span className="plp-mrp2" style={{ marginRight: '8px'}}>GST: 12% </span></Typography>
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
                      <img src={ProductImg} alt="img1" className="watchlist-image"/>
                      <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle2">Abilify(aripiprazole) I…</Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Pack Size: 10 ml bottle</Typography>
                      <Typography variant='subtitle2' className="plp-mrp2">MRP ₹80.00 <span className="plp-mrp2" style={{ marginRight: '8px'}}>GST: 12% </span></Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                      <div className="shortbook-container">
                      <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                          <img src={shortbook} alt="shortbook"/>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={6} className="half-grid">
                  <div className={classess.spacing}>
                      <div className="orders-icon-container">
                          <img src={wishlist} alt="fav" />
                      </div> 
                      <img src={ProductImg} alt="img1" className="watchlist-image"/>
                      <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle2">Abilify(aripiprazole) I…</Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Pack Size: 10 ml bottle</Typography>
                      <Typography variant='subtitle2' className="plp-mrp2">MRP ₹80.00 <span className="plp-mrp2" style={{ marginRight: '8px'}}>GST: 12% </span></Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                      <div className="shortbook-container">
                      <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                          <img src={shortbook} alt="shortbook"/>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={6} className="half-grid">
                  <div className={classess.spacing}>
                      <div className="orders-icon-container">
                          <img src={wishlist} alt="fav" />
                      </div> 
                      <img src={ProductImg} alt="img1" className="watchlist-image"/>
                      <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle2">Abilify(aripiprazole) I…</Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Pack Size: 10 ml bottle</Typography>
                      <Typography variant='subtitle2' className="plp-mrp2">MRP ₹80.00 <span className="plp-mrp2" style={{ marginRight: '8px'}}>GST: 12% </span></Typography>
                      <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
                      <div className="shortbook-container">
                      <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
                          <img src={shortbook} alt="shortbook"/>
                      </div>
                  </div>
              </Grid>
          </Grid>
  </Container>
    )
}

export default ProductVarients
