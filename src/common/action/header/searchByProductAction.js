import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";


export const searchByProductLoading = () => ({
  type: Types.SEARCH_BY_PRODUCT_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const searchByProductSuccess = (
  searchByProduct
) => ({
  type: Types.SEARCH_BY_PRODUCT_SUCCESS,
  loading: false,
  payload: searchByProduct,
  error: ""
});

export const searchByProductFailure = (errMsg) => ({
  type: Types.SEARCH_BY_PRODUCT_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const SearchByProduct = (body) => async (dispatch) => {
  dispatch(searchByProductLoading());

  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
    "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  };

  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":"74140895206ad6b9",
  //   "X-Csquare-Api-Key":"ySSGmSMgDuWLzPiIx7Ucbw=="

  // };

  // console.log(headers, "<<headers")
// .get(`${ENV.BASE_URL}/mst/search/prd/${searchKey}`,{ headers })
  //  .get(`${ENV.BASE_URL}/lc/ms/mst/l/item/dd?name=${searchKey}`,{ headers })

  

  // await axios.post(`${ENV.BASE_URL}/search/rawpdtwise_single_search`,body,{headers})


  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/search/l/prd`,body,{headers})
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        dispatch(searchByProductSuccess(response.data.payloadJson.data.j_list))
      } else {
        dispatch(searchByProductFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(searchByProductFailure("Something went wrong, Please try again later!"));
    });
};
