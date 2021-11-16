import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const ownItemMasterMapLoading = () => ({
  type: Types.OWN_ITEM_MASTER_MAP_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const ownItemMasterMapSuccess = (result) => ({
  type: Types.OWN_ITEM_MASTER_MAP_SUCCESS,
  payload: result,
  loading: false,
  error: ""
});

export const ownItemMasterMapFailure = (errMsg) => ({
  type: Types.OWN_ITEM_MASTER_MAP_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const MoveOwnItemMasterMap = (body) => async (dispatch) => {
  dispatch(ownItemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/moveToOwnItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(ownItemMasterMapSuccess(response.data.payloadJson.data))
      }else{
        dispatch(ownItemMasterMapFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(ownItemMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
