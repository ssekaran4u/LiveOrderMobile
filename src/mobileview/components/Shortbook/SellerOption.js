import React from 'react'
import TextField from '@material-ui/core/TextField';

function SellerOption() {
    return (
        <div>
            <div className="shortbook-seller-option">
                <button></button>
                <div className="shortbook-seller-option-title">
                    <h4>Select Seller For Refort 200ml Syrup</h4>
                    <p>See best schemes, Rate below</p>
                </div>
                <div className="seller-option-list">
                    <p>Mahaveer Medi-Sales</p>
                    <div className="seller-option-list-flex">
                        <ul>
                            <li>Rate: ₹ 10.00</li>
                            <li>Scheme: 10+1</li>
                        </ul>
                        <TextField
                                name="email"
                                select
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                className="mob-pro-drugcount"
                                sx={{marginTop: "8px"}}
                                >
                                <option value={"one"}>10</option>
                                <option value={"two"}>20</option>
                                <option value={"three"}>30</option>
                        </TextField>
                        <button>Add</button>
                    </div>
                </div>
                <div className="seller-option-list">
                    <p>Raj Sons Pvt. Ltd.</p>
                    <div className="seller-option-list-flex">
                        <ul>
                            <li>Rate: ₹ 10.50</li>
                            <li>Scheme: 10+1</li>
                        </ul>
                        <TextField
                                name="email"
                                select
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                className="mob-pro-drugcount"
                                sx={{marginTop: "8px"}}
                                >
                                <option value={"one"}>10</option>
                                <option value={"two"}>20</option>
                                <option value={"three"}>30</option>
                        </TextField>
                        <button>Add</button>
                    </div>
                </div>
                <div className="seller-option-list">
                    <p>Vardhman Pharma</p>
                    <div className="seller-option-list-flex">
                        <ul>
                            <li>Rate: ₹ 10.60</li>
                            <li>Scheme: 10+1</li>
                        </ul>
                        <TextField
                                name="email"
                                select
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                className="mob-pro-drugcount"
                                sx={{marginTop: "8px"}}
                                >
                                <option value={"one"}>10</option>
                                <option value={"two"}>20</option>
                                <option value={"three"}>30</option>
                        </TextField>
                        <button>Add</button>
                    </div>
                </div>
                <div className="seller-option-list">
                    <p>Ganesh Pharma</p>
                    <div className="seller-option-list-flex">
                        <ul>
                            <li>Rate: ₹ 11.50</li>
                            <li>Scheme: 10+2</li>
                        </ul>
                        <TextField
                                name="email"
                                select
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                className="mob-pro-drugcount"
                                sx={{marginTop: "8px"}}
                                >
                                <option value={"one"}>10</option>
                                <option value={"two"}>20</option>
                                <option value={"three"}>30</option>
                        </TextField>
                        <button>Add</button>
                    </div>
                </div>
                <div className="seller-option-list">
                    <p>RSM Pharma</p>
                    <div className="seller-option-list-flex">
                        <ul>
                            <li>Rate: ₹ 11.50</li>
                            <li>Scheme: 10+1</li>
                        </ul>
                        <TextField
                                name="email"
                                select
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                className="mob-pro-drugcount"
                                sx={{marginTop: "8px"}}
                                >
                                <option value={"one"}>10</option>
                                <option value={"two"}>20</option>
                                <option value={"three"}>30</option>
                        </TextField>
                        <button>Add</button>
                    </div>
                </div>
                <div className="seller-option-list">
                    <p>Varun Pharma</p>
                    <div className="seller-option-list-flex">
                        <ul>
                            <li>Rate: ₹ 12.00</li>
                            <li>Scheme: 10+1</li>
                        </ul>
                        <TextField
                                name="email"
                                select
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                className="mob-pro-drugcount"
                                sx={{marginTop: "8px"}}
                                >
                                <option value={"one"}>10</option>
                                <option value={"two"}>20</option>
                                <option value={"three"}>30</option>
                        </TextField>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerOption
