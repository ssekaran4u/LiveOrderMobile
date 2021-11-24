import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container'
import SwipeableViews from 'react-swipeable-views';
import OrderHistory from './OrderHistory';
import FrequentlyOrder from './FrequentlyOrder';



const styles = {
    tab : {
        fontSize: '13px',
        textTransform: 'capitalize',
        fontFamily: 'Quicksand-Bold',
        color: '#2e3e6a',
        borderBottom: '1.5px dashed #dbdbdb'
    }
}

class OrdersPage extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <Container>
            <Tabs value={index} onChange={this.handleChange} indicatorColor="primary">
            <Tab label="All Orders" style={styles.tab} />
            <Tab label="Frequently Ordered / Smart Order" style={styles.tab} />
            </Tabs>
        </Container>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div><OrderHistory /></div>
          <div><FrequentlyOrder /></div>
        </SwipeableViews>
      </div>
    );
  }
}

export default OrdersPage;
