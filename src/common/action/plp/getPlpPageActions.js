import { Types } from "../../constant/action";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const getPlpPageLoading = ()  => ({
  type: Types.PLP_PAGE_LOADING,
  loading: true,
  payload:[],
  error: ""
});

export const getPlpPageSuccess = (result) => ({
    type: Types.PLP_PAGE_SUCCESS,
    loading: false,
    payload: result,
    error: ""
});
export const getPlpPageFailure = (errMsg) => ({
    type: Types.PLP_PAGE_FAILURE,
    loading: false,
    payload: [],
    error: errMsg
  });

export const GetPlpPageActions = (inputs) => async (dispatch) => {
  dispatch(getPlpPageLoading());
  
  if(inputs.page_path !='')
  {
      const headers = {
        "Content-Type":"application/json",
        "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
        "X-csquare-api-key":localStorage.getItem(Constants.KEY),
      };
  //     const headers = {
  //   "Content-Type":"application/json",
  //   "X-csquare-api-token":"-7182737950ea4c6",
  //   "X-csquare-api-key":"Jz9bDBbGLfpwIT7qvhOTaw==",
  // };
      const body={
        "n_page":inputs.n_page,
        "n_limit":inputs.n_limit
      }
        if(inputs.type == 'top-most')
        {
            body['c_pincode']=localStorage.getItem(Constants.PIN_CODE);
        }
        else if(inputs.type == 'preferred')
        {
            body['c_pincode']=localStorage.getItem(Constants.PIN_CODE);
        }
        else if(inputs.type == 'new')
        {
            body['c_pincode']=localStorage.getItem(Constants.PIN_CODE);
        }
        else if(inputs.type == 'seller')
        {
            body['c_seller_code']=inputs.c_code;
        }
        else if(inputs.type == 'mfg')
        {
            body['c_manufacture_code']=inputs.c_code;
        }
        else if(inputs.type == 'search')
        {
            console.log(inputs.type)
            body['c_search_term']=inputs.c_code
        }
        else if(inputs.type == 'category')
        {
            body['c_code']=inputs.c_code;
        }
        console.log(body,"$$$ BOdy")
       await axios.post(`${REACT_APP_BASE_URL}${inputs.page_path}`,body, {headers})
        .then(response => {
            if(response.data.appStatusCode === 0){
               // console.log(response.data.payloadJson.data)
                dispatch(getPlpPageSuccess(response.data.payloadJson.data))
              } else {
                dispatch(getPlpPageFailure(response.data.messages[0]))
              }
            })
        .catch(error => {
          dispatch(getPlpPageFailure("Something went wrong in Alternative Slider, Please try again later!"));
        });
  }
  else
  {
      console.log(inputs)
      dispatch(getPlpPageFailure("Invalid Path"))
  } 
}



