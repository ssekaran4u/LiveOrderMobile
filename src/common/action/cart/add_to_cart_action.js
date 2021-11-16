import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const AddToCartActionLoading = () => ({
  type: Types.ADD_TO_CART_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const AddToCartActionSuccess = (payload) => ({
  type: Types.ADD_TO_CART_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const AddToCartActionFailure = (errMsg) => ({
  type: Types.ADD_TO_CART_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const AddToCartAction = (body) => async(dispatch ) => {

 
  dispatch(AddToCartActionLoading());
  // const headers = {
  //   "Content-Type": "application/json"
  // };
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  console.log(body,"body")
  console.log(headers,"headers")
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/addItem`,body,{ headers })
    
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        let data  = []
        data.push(response.data.payloadJson.data)
        dispatch(AddToCartActionSuccess(data))
      } else {
        dispatch(AddToCartActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(AddToCartActionFailure("Something went wrong, Please try again later!"));
    });
}