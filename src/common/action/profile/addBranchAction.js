import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const addBranchLoading = () => ({
    type: Types.ADD_BRANCH_LOADING,
    loading: true,
    message: null,
    statuscode:"",
    error: ""
});
  
export const addBranchSuccess = (message,code) => ({
    type: Types.ADD_BRANCH_SUCCESS,
    loading: false,
    message: message,
    statuscode:code,
    error: ""
});
  
export const addBranchFailure = (errMsg,code) => ({
    type: Types.ADD_BRANCH_FAILURE,
    loading: false,
    message: null,
    statuscode:code,
    error: errMsg
});

export const AddBranchAction = (inputs, isEdit)  => async (dispatch) => {
    dispatch(addBranchLoading());

    // const headers = {
    //     "Content-Type": "application/json",
    //     "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
    //     "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)//response.data.payloadJson.n_branch_id
    // };

    const headers = {
        "Content-Type": "application/json",
        "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
        "X-csquare-api-key":localStorage.getItem(Constants.KEY),
      };

    const body = inputs;

    if(isEdit){
        axios.put(`${REACT_APP_BASE_URL}/firm/branch/update`, body, {headers})
        .then(response => {
            if(response.data.appStatusCode === 0){
                if(inputs.n_firm_id !== undefined){
                    const branchid = parseInt(inputs.n_firm_id);
                    dispatch(addBranchSuccess(branchid,response.data.appStatusCode));
                }
            } else {
                dispatch(addBranchFailure(response.data.messages[0],response.data.appStatusCode))
            }
        })
        .catch(err => {
            dispatch(addBranchFailure("Something went wrong, Please try again later!"));
        })
    } else {
        axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/addbranch`, body, {headers})
        .then(response => {
            if(response.data.appStatusCode === 0){
                if(response.data.payloadJson !== null){
                    dispatch(addBranchSuccess(response.data.payloadJson,response.data.appStatusCode))
                }  else {
                    dispatch(addBranchFailure(response.data.messages[0],response.data.appStatusCode))
                }                          
            } else {
                dispatch(addBranchFailure(response.data.messages[0],response.data.appStatusCode))
            }
        })
        .catch(err => {
            dispatch(addBranchFailure("Something went wrong, Please try again later!"));
        })
    }
}