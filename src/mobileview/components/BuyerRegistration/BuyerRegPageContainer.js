import BuyerRegPage from "./BuyerRegPage";
import { State } from "../../../rootReducer";
import { validateOTP, SendOTP, ReSendOTP } from "../../../common/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
});
  
const mapDispatchToProps = (dispatch) => ({

});

const BuyerRegPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerRegPage);

export default BuyerRegPageContainer