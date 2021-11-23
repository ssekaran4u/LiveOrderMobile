import React from 'react'
import {Container, Grid} from '@material-ui/core'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

//Images
import MahaveerLogo from "../../../assets/images/mahaveer.png"

function OrderHistory() {
    return (
        <Container>
            <div>
                <div className="header-flex">
                    <h4>All Orders</h4>
                    <h4>Frequently Ordered / Smart Order</h4>
                </div>
                <div className="header2-flex">
                    <h4>Last 6 Months Order</h4>
                    <MoreVertTwoToneIcon />
                </div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <div className="logo-flex">
                            <img src={MahaveerLogo} alt="logo" />
                            <button className="view-btn">View</button>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="grid-header">
                            <h4>Mahaveer Medi Sales</h4>
                            <h5>₹ 10,056.00</h5>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default OrderHistory
