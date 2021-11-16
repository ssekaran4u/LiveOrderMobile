// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemMasterMapLoading = () => ({
  type: Types.ITEM_MASTER_MAP_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const itemMasterMapSuccess = (result) => ({
  type: Types.ITEM_MASTER_MAP_SUCCESS,
  payload: result,
  loading: false,
  error: ""
});

export const itemMasterMapFailure = (errMsg) => ({
  type: Types.ITEM_MASTER_MAP_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const GetItemMasterMap = (body) => async (dispatch) => {
  dispatch(itemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/listItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(itemMasterMapSuccess(response.data.payloadJson.data))
      }else{
        dispatch(itemMasterMapFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(itemMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
