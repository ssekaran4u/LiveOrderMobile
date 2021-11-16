import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const watchlistItemsLoading = () => ({
  type: Types.WATCHLIST_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const watchlistItemsSuccess = (result) => ({
  type: Types.WATCHLIST_SUCCESS,
  payload: result,
  loading: false,
  error: ""
});

export const watchlistItemsFailure = (errMsg) => ({
  type: Types.WATCHLIST_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const GetWatchlistItems = (body) => async (dispatch) => {
  dispatch(watchlistItemsLoading())
  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
    "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)

  };
  
 
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/wl/getWatchListLists`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(watchlistItemsSuccess(response.data.payloadJson))

      }else{
        dispatch(watchlistItemsFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(watchlistItemsFailure("Something went wrong, Please try again later!"));
  });

  
};
