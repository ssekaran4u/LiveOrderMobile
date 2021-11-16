import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const OrderCreditLimitLoading = ()=> ({
    type: Types.ORDER_CREDIT_LIMIT_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const OrderCreditLimitSuccess = (result,code) => ({
    type: Types.ORDER_CREDIT_LIMIT_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const OrderCreditLimitFailure = (errMsg,code) => ({
    type: Types.ORDER_CREDIT_LIMIT_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const OrderCreditLimit = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/getCreditLimit`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(OrderCreditLimitSuccess(response.data.payloadJson.c_credit_limits, response.data.appStatusCode))
        } else {
          dispatch(OrderCreditLimitFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(OrderCreditLimitFailure("Sorry something went wrong, Please try again"));
      });
  };