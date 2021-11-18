import React from 'react'
import { Grid, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import Search from "../../../assets/mobImages/search-grey/search.png"



// import WatchListSearch from '../WatchLists/WatchListSearch'

function FilterOptionGrid() {

    const lists = [
        {
            id : 1,
            'title' : 'AbbVie Inc'
        },
        {
            id : 2,
            'title' : 'Abbott Laboratories'
        },
        {
            id : 3,
            'title' : 'Alkem Laboratories'
        },
        {
            id : 4,
            'title' : 'Bayer AG'
        },
        {
            id : 5,
            'title' : 'Cipla'
        },
        {
            id : 6,
            'title' : 'GlaxoSmithKline Plc'
        },
        {
            id : 7,
            'title' : 'Eli Lilly and Co'
        },
        {
            id : 8,
            'title' : 'Johnson & Johnson (J&J)'
        },
        {
            id : 9,
            'title' : 'J.B Chemicals '
        },
        {
            id : 10,
            'title' : 'Micro Labs Ltd'
        },
        {
            id : 11,
            'title' : 'Eli Lilly and Co'
        },
        {
            id : 12,
            'title' : 'Sun Pharmaceutical Ind...'
        }

    ]

    const useStyles = makeStyles({
        item : {
            fontSize: '14px',
            fontFamily: 'Quicksand-Regular',
            color: '#343a40'
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
            <Grid item xs={4}>
                <List>
                    <ListItem sx={{ fontSize: '14px', fontFamily: 'Quicksand-Medium',color: '#343a40', fontWeight : 600}}>Manufacturers</ListItem>
                    <ListItem className={classess.item}>Brands</ListItem>
                    <ListItem className={classess.item}>Sellers</ListItem>
                    <ListItem className={classess.item}>Availability</ListItem>
                    <ListItem className={classess.item}>Discounts</ListItem>
                </List>
            </Grid>
            <Grid item xs={8}>
                <div className="mob-filter-option-search-container">
                    <img src={Search} alt="Search-icon" />
                    <input type="text" placeholder="Search shortbook products" />
                </div>
                {
                    lists.map( list => (
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
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default FilterOptionGrid
