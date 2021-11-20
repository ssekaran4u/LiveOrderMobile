import React from 'react'
import { Grid, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import Search from "../../../assets/mobImages/search-grey/search.png"



// import WatchListSearch from '../WatchLists/WatchListSearch'

function FilterOptionGrid() {

    const [ sideGrid, setSideGrid] = React.useState(true)
    const [ brandGrid, setBrandGrid] = React.useState(false)
    const [ sellerGrid, setSellerGrid] = React.useState(false)
    const [ availGrid, setAvailGrid] = React.useState(false)
    const [ discountGrid, setDiscountGrid] = React.useState(false)

    const TogglingGrid = () => {
        setSideGrid(!sideGrid)
    }

    const TogglingBrandGrid = () => {
        setBrandGrid(!brandGrid)
    }
    
    const TogglingSellerGrid = () => {
        setSellerGrid(!sellerGrid)
    }

    const TogglingAvailGrid = () => {
        setAvailGrid(!availGrid)
    }

    const TogglingDiscountGrid = () => {
        setDiscountGrid(!discountGrid)
    }

    const lists = [
        {
            id : 1,
            'title' : 'AbbVie Inc',
            'brands' : 'Calpol',
            'sellers' : 'Ganesh Pharma',
        },
        {
            id : 2,
            'title' : 'Abbott Laboratories',
            'brands' : 'Dolo',
            'sellers' : 'Karnataka Pharma',
        },
        {
            id : 3,
            'title' : 'Alkem Laboratories',
            'brands' : 'Metacin',
            'sellers' : 'Vardhman Pharma'
        },
        {
            id : 4,
            'title' : 'Bayer AG',
            'brands' : 'Medomol',
            'sellers' : 'Gurukrupa Pharma a'
        },
        {
            id : 5,
            'title' : 'Cipla',
            'brands' : 'Crocin',
            'sellers' : 'Akshaya Pharma'
        },
        {
            id : 6,
            'title' : 'GlaxoSmithKline Plc',
            'brands' : 'Pacimol',
            'sellers' : 'S.L.V Pharma'
        },
        {
            id : 7,
            'title' : 'Eli Lilly and Co',
            'brands' : 'Paracip',
            'sellers' : 'Vardhaman Pharma'
        },
        {
            id : 8,
            'title' : 'Johnson & Johnson (J&J)',
            'brands' : 'Sumo L',
            'sellers' : 'United Pharma'
        },
        {
            id : 9,
            'title' : 'J.B Chemicals ',
            'brands' : 'Pacinova',
            'sellers' : 'M.M.I Pharma'
        },
        {
            id : 10,
            'title' : 'Micro Labs Ltd',
            'brands' : 'Parasafe',
            'sellers' : 'Ravindra Pharma'
        },
        {
            id : 11,
            'title' : 'Eli Lilly and Co',
            'brands' : 'Zerden',
            'sellers' : 'Sanjay Pharma'
        },
        {
            id : 12,
            'title' : 'Sun Pharmaceutical Ind...',
            'brands' : 'Zinc',
            'sellers' : 'Zydus Medi-Sales'
        }

    ]

    const useStyles = makeStyles({
        item :  {
            fontSize: '12px',
            color: '#343a40',
            fontFamily: 'Quicksand-Regular',
            // "&:active,&:focus" : {
            //     backgroundColor: '#fff',
            //     fontSize: '14px',
            //     color: '#343a40',
            //     fontFamily: 'Quicksand-Medium',
            //     fontWeight: '600',
            //     height: '50px',
            //     borderBottom : '1px solid #dbdbdb',
            //     marginTop: '-8px'
            // },
        },
        itemTitle : {
            fontSize: '12px',
            fontFamily: 'Quicksand-Medium',
            color: '#5b636a',
        }, 
        itemBorder: {
            borderBottom: '1px dashed #dbdbdb',
            width: '216px !important',
            padding: '0px !important',
            marginLeft: '12px'
        }

    })
      
    const classess = useStyles();

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4} >
                <List>
                    <ListItem className={classess.item} onClick={TogglingGrid}>Manufacturers</ListItem>
                    <ListItem className={classess.item} onClick={TogglingBrandGrid}>Brands</ListItem>
                    <ListItem className={classess.item} onClick={TogglingSellerGrid}>Sellers</ListItem>
                    <ListItem className={classess.item} onClick={TogglingAvailGrid}>Availability</ListItem>
                    <ListItem className={classess.item} onClick={TogglingDiscountGrid}>Discounts</ListItem>
                </List>
            </Grid>
            <Grid item xs={8}>
                <div className="mob-filter-option-search-container">
                    <img src={Search} alt="Search-icon" />
                    <input type="text" placeholder="Search shortbook products" />
                </div>
                { sideGrid ? 
                    (lists.map( list => (
                        <Grid>
                            <div className="plp-filter-option-manufacturers-list">
                                <List key={list.id}>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>{list.title}</p>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    ))) : null
                }
                {
                brandGrid ?
                    (lists.map( list => (
                        <Grid>
                            <div className="plp-filter-option-manufacturers-list">
                                <List key={list.id}>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>{list.brands}</p>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    ))) : null
                }
                {
                sellerGrid ?
                    (lists.map( list => (
                        <Grid>
                            <div className="plp-filter-option-manufacturers-list">
                                <List key={list.id}>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>{list.sellers}</p>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    ))) : null
                }
                {
                availGrid ?
                        (<Grid>
                            <div className="plp-filter-option-manufacturers-list">
                                <List>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>In Stock</p>
                                    </ListItem>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>Out Of Stock</p>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>)
                     : null
                }
                {
                discountGrid ?
                        (<Grid>
                            <div className="plp-filter-option-manufacturers-list">
                                <List>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>40% & above</p>
                                    </ListItem>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>30% & above</p>
                                    </ListItem>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>20% & above</p>
                                    </ListItem>
                                    <ListItem className={classess.itemBorder}>
                                        <input type="checkbox" />
                                        <p className={classess.itemTitle}>10% & above</p>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>)
                     : null
                }
            </Grid>
        </Grid>
    )
}

export default FilterOptionGrid
