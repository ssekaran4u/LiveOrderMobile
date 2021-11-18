import * as React from "react";
import { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Divider } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';


//images
import SliderImg from "../../../assets/images/home-slider-img.jpg";
import Shortbook from "../../../assets/mobImages/shortbook-grey/shortbook.png";
import Item1 from "../../../assets/mobImages/item1.png";
import Item2 from "../../../assets/mobImages/item2.png";
import Item3 from "../../../assets/mobImages/item3.png";
import Item4 from "../../../assets/mobImages/item4.png";
import Item5 from "../../../assets/mobImages/item5.png";
import Item6 from "../../../assets/mobImages/item6.png";

import shortbook from "../../../assets/mobImages/shortbook-white/shortbook.png"
import shopping from "../../../assets/mobImages/commerce_and_shopping.svg"
import wishlist from "../../../assets/mobImages/wishlist-white/wishlist.png"

import DistributorList from "./DistributorList";
import BottomContainer from "./BottomContainer";
import SortOption from "./SortOption"
import ProductVarients from "./ProductVarients"
import FilterOption from './FilterOption'


const PLPPage = (props) => {
  const {GetFastMovingItems, 
    fastMovingItemsResult,
    GetPdpPageAlternatives,
    pdpPageAlternativesResult,
    match } = props;
    const limitNumber =  10;

  useEffect(() => {
    GetFastMovingItems()
  }, []);
  useEffect(() => {
    GetPdpPageAlternatives(match.params.contCode, limitNumber);
  }, [match.params.contCode]);
  
 const result = ((Array.isArray(pdpPageAlternativesResult.payload) && pdpPageAlternativesResult.payload.length !== 0 )? pdpPageAlternativesResult.payload : fastMovingItemsResult.payload )
console.log( "result ", result)
console.log( match.params)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const listArr = [Item1, Item2, Item3, Item4, Item5, Item6];
// console.log(" fastMovingItemsResultMOb ", fastMovingItemsResult )
  const ListArr = [
    {
      id: Item1,
      name: "Bronko Med Syrup"
    }, {
      id: Item2,
      name: "Refort 200ml Syrup"
    }, {
      id: Item3,
      name: "Benadryl Cough Syrup"
    }, {
      id: Item4,
      name: "ChildLife Cough Syrup"
    }, {
      id: Item5,
      name: "Bronko Med Syrup"
    }, {
      id: Item6,
      name: "Dolo 250 MG Syrup"
    }
  ]
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (
    event,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event ).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const useStyles = makeStyles({
    spacing : {
        backgroundColor: '#f4f9f9',
        borderRadius: '4px',
        padding: '12px 0px'
    }
  })
  
  const classess = useStyles();

  return (
//     <div className="mob-profile-sec-space mob-home-slider">
//       <DistributorList toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
//       <Grid container className="mob-product-list">
//       {
//      result == pdpPageAlternativesResult.payload ? 
//      (Array.isArray(pdpPageAlternativesResult.payload) && pdpPageAlternativesResult.payload.length !== 0 &&
//       <>
//         {(pdpPageAlternativesResult.payload).map((item, index) => (
//         <Grid item xs={6} key={item.c_item_code}>
//            <Link to={`/pdp/${item.c_item_code}`}>
//           <div className="mob-home-slide top-ordered-slider">
//             <div className="center shortbook-sec">
//               <img
//                 src={Shortbook}
//                 alt="Shortbook"
//                 className="shortbook-icon"
//               />
//               <img
//                src={item.a_image_urls[0]}
//                 alt="homeSliderImg"
//                 className="slider-img"
//               />
//             </div>
//             <h5 className="mob-home-slider-title">{item.c_item_name}</h5>
//             <h6 className="mob-home-slider-subtitle">
//               Pack Size: {item.j_sub_detail.c_pack_name}
//             </h6>
//         <h6 className="mob-home-slider-mtp">MRP &#8377; {item.n_mrp}</h6>
//             <h6 className="mob-home-slider-contains">
//               <span>Contains</span>
//         <span className="contains-ele">{item.j_sub_detail.c_cont_name}</span>
//             </h6>
//             <Button
//               variant="contained"
//               color="primary"
//               className="fast-moving-addtocart mob-home-addtocart "
//               onClick={toggleDrawer(true)}
//             >
//               Add To Cart
//             </Button>
//           </div>
//           </Link>
//         </Grid>
//       ))}
//        </>) : 
//       (Array.isArray(fastMovingItemsResult.payload) && fastMovingItemsResult.payload.length !== 0 &&
//         <>
//           {(fastMovingItemsResult.payload).map((item, index) => (
//           <Grid item xs={6} key={item.c_item_ucode}>
//              <Link to={`/pdp/${item.c_item_ucode}`}>
//             <div className="mob-home-slide top-ordered-slider">
//               <div className="center shortbook-sec">
//                 <img
//                   src={Shortbook}
//                   alt="Shortbook"
//                   className="shortbook-icon"
//                 />
//                 <img
//                   src={item.ac_thumbnail_url[0]}
//                   alt="homeSliderImg"
//                   className="slider-img"
//                 />
//               </div>
//               <h5 className="mob-home-slider-title">{item.c_item_name}</h5>
//               <h6 className="mob-home-slider-subtitle">
//                 Pack Size: {item.c_pack_size}
//               </h6>
//           <h6 className="mob-home-slider-mtp">MRP &#8377; {item.n_mrp}</h6>
//               <h6 className="mob-home-slider-contains">
//                 <span>Contains</span>
//           <span className="contains-ele">{item.c_contains}</span>
//               </h6>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className="fast-moving-addtocart mob-home-addtocart "
//                 onClick={toggleDrawer(true)}
//               >
//                 Add To Cart
//               </Button>
//             </div>
//             </Link>
//           </Grid>
//         ))}
//          </>)
// }
//       </Grid>
//     </div>
  
  // <Container>
  //         <Box sx={{
  //             display : 'flex',
  //             justifyContent: 'space-between',
  //             marginTop: '16px',
  //             fontFamily: 'Quicksand-Medium',
  //             fontSize: '12px',
  //             color: '#2e3e6a',
  //             }}>
  //         </Box>
  //         <Grid container spacing={2}>
  //             <Grid item xs={6} spacing={1}>
  //                 <div className={classess.spacing}>
  //                 <div className="orders-icon-container1">
  //                         <img src={shopping} alt="discount" />
  //                         <img src={wishlist} alt="fav" />
  //                     </div>
  //                         <img src={Item1} alt="img1" className="watchlist-image"/>
  //                         <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Refort 200ml Syrup</Typography>
  //                         <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
  //                         <Typography variant='subtitle2' className="plp-mrp">MRP ₹80.00</Typography>
  //                         <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
  //                         <div className="shortbook-container">
  //                         <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
  //                             <img src={shortbook} alt="shortbook"/>
  //                         </div>
  //                 </div>    
  //             </Grid>
  //             <Grid item xs={6}>
  //                 <div className={classess.spacing}>
  //                     <div className="orders-icon-container">
  //                         <img src={wishlist} alt="fav" />
  //                     </div> 
  //                     <img src={Item2} alt="img1" className="watchlist-image"/>
  //                     <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Cremaffin Plus Syrup</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
  //                     <Typography variant='subtitle2' className="plp-mrp">MRP ₹80.00</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
  //                     <div className="shortbook-container">
  //                     <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
  //                         <img src={shortbook} alt="shortbook"/>
  //                     </div>
  //                 </div>
  //             </Grid>
  //             <Grid item xs={6}>
  //                 <div className={classess.spacing}>
  //                     <div className="orders-icon-container">
  //                         <img src={wishlist} alt="fav" />
  //                     </div> 
  //                     <img src={Item3} alt="img1" className="watchlist-image"/>
  //                     <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">ChildLife Cough Syrup</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
  //                     <Typography variant='subtitle2' className="plp-mrp">MRP ₹80.00</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
  //                     <div className="shortbook-container">
  //                     <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
  //                         <img src={shortbook} alt="shortbook"/>
  //                     </div>
  //                 </div>                   
  //             </Grid>
  //             <Grid item xs={6}>
  //                 <div className={classess.spacing}>
  //                     <div className="orders-icon-container">
  //                         <img src={wishlist} alt="fav" />
  //                     </div> 
  //                     <img src={Item5} alt="img1" className="watchlist-image"/>
  //                     <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Vasu Step Syrup</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
  //                     <Typography variant='subtitle2' className="plp-mrp">MRP ₹80.00</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
  //                     <div className="shortbook-container">
  //                     <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
  //                         <img src={shortbook} alt="shortbook"/>
  //                     </div>
  //                 </div>
  //             </Grid>
  //             <Grid item xs={6} className="half-grid">
  //                 <div className={classess.spacing}>
  //                     <div className="orders-icon-container">
  //                         <img src={wishlist} alt="fav" />
  //                     </div> 
  //                     <img src={Item6} alt="img1" className="watchlist-image"/>
  //                     <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Vasu Step Syrup</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
  //                     <Typography variant='subtitle2' className="plp-mrp">MRP ₹80.00</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
  //                     <div className="shortbook-container">
  //                     <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
  //                         <img src={shortbook} alt="shortbook"/>
  //                     </div>
  //                 </div>
  //             </Grid>
  //             <Grid item xs={6} className="half-grid">
  //                 <div className={classess.spacing}>
  //                     <div className="orders-icon-container">
  //                         <img src={wishlist} alt="fav" />
  //                     </div> 
  //                     <img src={Item4} alt="img1" className="watchlist-image"/>
  //                     <Typography variant='subtitle1' sx={{fontSize: "12px"}} className="watchlist-productTitle">Vasu Step Syrup</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Pack Size 100ml</Typography>
  //                     <Typography variant='subtitle2' className="plp-mrp">MRP ₹80.00</Typography>
  //                     <Typography variant='body' className="watchlist-sub-heading">Contains : <span>Sodium picosul...</span> </Typography>
  //                     <div className="shortbook-container">
  //                     <Button variant="contained" style={{backgroundColor: '#00d3b4', color: '#fff', marginTop: '12px', marginLeft: '8px', padding: '8px'}}>Add To Cart</Button>
  //                         <img src={shortbook} alt="shortbook"/>
  //                     </div>
  //                 </div>
  //             </Grid>
  //         </Grid>
  //         {/* <BottomContainer /> */}
  //         {/* <SortOption /> */}
              // <ProductVarients />
  // </Container>
    <FilterOption />
  
  )
}

export default PLPPage;