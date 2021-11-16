import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const profileDetailsLoading = () => ({
  type: Types.PROFILE_DETAILS_LOADING,
  loading: true,
  error: "",
  message: "",
});

export const profileDetailsSuccess = (result, sucMsg) => ({
  type: Types.PROFILE_DETAILS_SUCCESS,
  loading: false,
  error: "",
  message: sucMsg,
  payload: result,
});

export const profileDetailsFailure = (errMsg) => ({
  type: Types.PROFILE_DETAILS_SUCCESS,
  loading: false,
  error: errMsg,
  message: "",
});

export const profileDetails = () => async (dispatch) => {

  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-csquare-api-key": localStorage.getItem(Constants.KEY),
  //   "X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
  // };

  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
    "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
  };




  await axios
    .get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`,{headers})
    .then((response) => {
      if (response.data.appStatusCode === 0) {
        dispatch(profileDetailsSuccess(response.data.payloadJson.data, response.data.messages[0]));
      } else {
        dispatch(profileDetailsFailure(response.data.messages[0]));
      }
    })
    .catch((error) => {
      dispatch(
        profileDetailsFailure("Something went wrong, Please try again later!")
      );
    });



  // axios.get(`${ENV.BASE_URL}/firm/branch/default`, { headers })
  //   .then((response) => {
  //     if (response.data.appStatusCode === 0) {
  //       if (response.data.payloadJson !== null) {
  //         localStorage.setItem(
  //           Constants.FIRM_ID,
  //           response.data.payloadJson.n_branch_id
  //         );
  //         localStorage.setItem(
  //           Constants.DEFAULT_FIRM_ID,
  //           response.data.payloadJson.n_branch_id
  //         );
  //         dispatch(loginSuccess());
  //         history.push("/home");
  //       } else {
  //         dispatch(loginFailure(response.data.messages[0]));
  //       }
  //     } else {
  //       dispatch(loginFailure(response.data.messages[0]));
  //     }
  //   })
  //   .catch((error) => {
  //     dispatch(loginFailure("Something went wrong, Please try again later!"));
  //   });
};
