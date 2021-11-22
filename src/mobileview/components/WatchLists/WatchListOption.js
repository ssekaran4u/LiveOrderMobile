import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Modal from 'react-modal'
import WatchListViewOnProduct from './WatchListViewOnProduct'
import { makeStyles } from '@mui/styles';


//Images
import Delete from "../../../assets/mobImages/delete.svg"

function WatchListOption() {

    const[ modalOpen, setModalOpen] = React.useState(false)
    const[ removeModal, setRemoveModal] = React.useState(false)

    const ProductViewer = () => {
        setModalOpen(!modalOpen)
    }

    const RemoveProduct = () => {
        setRemoveModal(!removeModal)
    }


    const useStyles = makeStyles({
        product : {
            position: 'absolute',
            top: 'auto',
            left: 0,
            right: 0,
            bottom: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 1)'
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
        overlay: {
            backgroundColor: 'rgba(9, 36, 72, 0.54)',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    })

    const classess = useStyles();


    return (
        <div className="mob-watchlist-search2">
            <div className="mob-watchlist-view-on-product">
                <VisibilityOutlinedIcon sx={{marginLeft: '12px'}}/>
                <h6 onClick={ProductViewer}>View On Product</h6>
                <Modal isOpen={modalOpen}
                onRequestClose={() => setModalOpen(!modalOpen)}
                className={classess.product}
                overlayClassName={classess.overlay}>
                    <WatchListViewOnProduct />
                </Modal>
            </div>
            <div className="mob-watchlist-view-on-product">
                <img src={Delete} alt="Search-icon" style={{marginLeft: '16px'}} />
                <h6 onClick={RemoveProduct}>Remove From Watchlist</h6>
                <Modal isOpen={removeModal} className={classess.modalWrapper}
                onRequestClose={() => setRemoveModal(!removeModal)}
                overlayClassName={classess.overlay}
                >
                <div className={classess.contentWrapper}><p className={classess.content}>Calpol 500mg tablet successfully removed</p></div>
                </Modal>    
            </div>
        </div>
    )
}

export default WatchListOption
