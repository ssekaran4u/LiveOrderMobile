import ForgotPassPage from "./ForgotPassPage";
import { State } from "../../../rootReducer";
import { SendOTP, SavePassword } from "../../../common/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  sendOTPResult: state.sendOTPResult,
  savePassResult: state.savePassResult
});

const mapDispatchToProps = (dispatch) => ({
  SendOTP: (username, page) =>
    dispatch(SendOTP(username, page)),
  SavePassword: (inputs) =>
    dispatch(SavePassword(inputs))
});


const ForgotPassPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassPage);

export default ForgotPassPageContainer