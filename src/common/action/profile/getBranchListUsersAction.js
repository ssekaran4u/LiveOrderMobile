import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const getBranchUserListSuccess = (result) => ({
  type: Types.GET_BRANCH_USER_SUCCESS,
  payload:result,
  error: ""
});

export const getBranchUserListFailure = (errMsg) => ({
  type: Types.GET_BRANCH_USER_FAILURE,
  payload: [],
  error: errMsg
});

export const getBranchUserListAction = (branchId)  => async (dispatch) => {
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
  // console.log("gdhasgdh")
  axios.get(`${REACT_APP_BASE_URL}/firm/branch/listUsers/${branchId}`, {headers})
  .then(response => {
    if(response.data.appStatusCode === 0){
      if(response.data.payloadJson !== null){
        // console.log(response.data.payloadJson.list, "ac")
        dispatch(getBranchUserListSuccess(response.data.payloadJson.list))
      } else {
        dispatch(getBranchUserListFailure(response.data.messages[0]))
      }
    } else {
      dispatch(getBranchUserListFailure(response.data.messages[0]))
    }
  })
  .catch(err => {
    dispatch(getBranchUserListFailure("Something went wrong, Please try again later!"));
  })
}