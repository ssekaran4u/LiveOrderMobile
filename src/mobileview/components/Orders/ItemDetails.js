import React from "react";
import { Container } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Modal from 'react-modal'
import { makeStyles } from '@mui/styles';


function ItemDetails({ itemModal, onItemModal }) {

  const[addressModal, setAddressModal] = React.useState(false)

  const CloseModal = () => {
    onItemModal(!itemModal);
  };

  const TogglingAddress = () => {
      setAddressModal(!addressModal)
  }

  const ShopItem = [
    {
      id: 1,
      itemName: "Calpol 250mg Peadiatric Oral",
      batchNumber: "003056",
      mrp: "28.50",
      quantity: "20",
      schemeQuantity: "04",
      discount: "2%",
      saleRate: "₹ 18.50",
      amount: "₹ 406.20",
    },
    {
      id: 2,
      itemName: "Refort 200ml Syrup",
      batchNumber: "003056",
      mrp: "28.50",
      quantity: "20",
      schemeQuantity: "04",
      discount: "2%",
      saleRate: "₹ 18.50",
      amount: "₹ 406.20",
    },
  ];

  const useStyles = makeStyles({
      overlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      addressStyle:{
        position : 'absolute',
        top: '56px',
        right: '16px',
        bottom: 'auto',
        backgroundColor: '#fff',
        padding: '16px',
        width: '216px',
        border: '1px solid #dfdfdf',
    }

  })

  const classess = useStyles()


  return (
    <Container>
      <div className="shop-details-header-section">
        <CloseIcon onClick={CloseModal} />
        <div className="shop-details-header-container">
          <div className="shop-details-header-flex">
            <h4>Mahaveer Medi-Sales</h4>
            <p>
              Address
              <KeyboardArrowDownIcon onClick={TogglingAddress}
                sx={{
                  fontSize: "medium",
                  position: "relative",
                  top: "4px",
                  color: "#343a40",
                }}
              />
            </p>
            <Modal isOpen={addressModal} onRequestClose={()=> setAddressModal(!addressModal)}
            className={classess.addressStyle} overlayClassName={classess.overlay}>
                <div>
                    <p># 97, Mahaveer Arcade, Sirsi Rd, Chamrajpet, Bengaluru, Karnataka 560018</p>
                </div>
            </Modal>
          </div>
          <h6>Order Id: MAHA094bh88748</h6>
        </div>
        <div className="item-details-container">
          <div className="item-details-flex">
            <div className="container">
              <p className="item-details-method-title">Billed To</p>
              <h6 className="item-details-method-content">
                Maruti Medicals-560027 …
              </h6>
            </div>
            <div className="container">
              <p className="item-details-method-title">Invoice Date</p>
              <h6 className="item-details-method-content">14th Sep, 2020</h6>
            </div>
            <div className="container">
              <p className="item-details-method-title">Invoice No</p>
              <h6 className="item-details-method-content">462SKOD329</h6>
            </div>
          </div>
          <div className="item-details-flex">
            <div className="container">
              <p className="item-details-method-title">Payment</p>
              <h6 className="item-details-method-content">Debit Card</h6>
            </div>
            <div className="container">
              <p className="item-details-method-title">Payment</p>
              <h6 className="item-details-method-content">Debit Card</h6>
            </div>
            <div className="container">
              <p className="item-details-method-title">Total Amtount</p>
              <h6 className="item-details-method-content">₹ 4,104.30</h6>
            </div>
          </div>
          <div className="item-details-flex">
            <div className="container">
              <p className="item-details-method-title">Due Date</p>
              <h6 className="item-details-method-content">17th Sep, 2020</h6>
            </div>
            <div className="container">
              <p className="item-details-method-title">Amount Paid</p>
              <h6 className="item-details-method-content">₹ 2000.00</h6>
            </div>
            <div className="container">
              <p className="item-details-method-title">Due Amount (₹)</p>
              <h6 className="item-details-method-total">₹ 2,104.30</h6>
            </div>
          </div>
        </div>
        {ShopItem.map((shopItem) => (
          <div className="shop-item-card-details">
            <div className="shop-item-card-details-header">
              <h5 className="card-header">
                Item Name:{" "}
                <span className="card-shop-header">{shopItem.itemName}</span>
              </h5>
            </div>
            <div className="card-container1">
              <div className="card-section">
                <h6 className="card-section-title">Batch No</h6>
                <h6 className="card-section-content">{shopItem.batchNumber}</h6>
              </div>
              <div>
                <h6 className="card-section-title">MRP</h6>
                <h6 className="card-section-content">{shopItem.mrp}</h6>
              </div>
              <div>
                <h6 className="card-section-title">Qty</h6>
                <h6 className="card-section-content">{shopItem.quantity}</h6>
              </div>
              <div>
                <h6 className="card-section-title">Scheme Qty</h6>
                <h6 className="card-section-content">
                  {shopItem.schemeQuantity}
                </h6>
              </div>
            </div>
            <div className="card-container1">
              <div>
                <h6 className="card-section-title">Discount</h6>
                <h6 className="card-section-content">{shopItem.discount}</h6>
              </div>
              <div className="card-content-margin">
                <h6 className="card-section-title">Sale Rate</h6>
                <h6 className="card-section-content">{shopItem.saleRate}</h6>
              </div>
              <div className="card-content2-margin">
                <h6 className="card-section-title">Net Amount</h6>
                <h6 className="card-section-amount">{shopItem.amount}</h6>
              </div>
            </div>
          </div>
        ))}
        <div className="item-details-bottom-container">
            <div className="download-option-container">
                <BookmarksOutlinedIcon sx={{marginLeft: '8px'}} />
                <h5>Invoice Download</h5>
                <ChevronRightOutlinedIcon sx={{position: 'relative', left: '22vh'}}/>
            </div>
            <div className="item-details-payment-container">
                <div>
                    <h4>₹ 4,104.30</h4>
                    <p>View Details</p>
                </div>
                <div>
                    <button className="item-details-payment-button">Pay Outstanding</button>
                </div>
            </div>
        </div>
      </div>
    </Container>
  );
}

export default ItemDetails;
