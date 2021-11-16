import React from 'react'
import { Container } from '@material-ui/core'

function FeedbackStore() {
    return (
        <Container>
            <div className="mob-feedback-store-wrapper">
                <button></button>
                <div className="mob-feedback-store-header">
                    <h4>Select Your Store</h4>
                    <p>Select store from below</p>
                </div>
                <div>
                    <ul className="mob-feedback-store-list">
                        <li>Maruthi Medical, Jayanagar</li>
                        <li>Maruthi Medical, Hebbal</li>
                        <li>Maruthi Medical, Tumkur</li>
                        <li>Maruthi Medical, Whitefield</li>
                        <li>Maruthi Medical, Bellandur</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default FeedbackStore
