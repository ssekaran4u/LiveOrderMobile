import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const cartCountLoading = () => ({
  type: Types.CARTCOUNT_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const cartCountSuccess = (categorylists) => ({
  type: Types.CARTCOUNT_SUCCESS,
  loading: false,
  payload: categorylists,
  error: ""
});

export const cartCountFailure = (errMsg)=> ({
  type: Types.CARTCOUNT_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const CartCount = () => async (dispatch) => {
  dispatch(cartCountLoading());
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  
  await axios
   .get(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/count`,{ headers })
    .then(response => {
      // console.log(response)
      if(response.data.appStatusCode === 0){
        dispatch(cartCountSuccess(response.data.payloadJson))
      } else {
        dispatch(cartCountFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(cartCountFailure("Something went wrong, Please try again later!"));
    });
};
