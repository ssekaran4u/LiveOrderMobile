import axios from "axios";
import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import {
  FreqorderActionEntity,
  FreqorderResultEntity,
  FreqorderInputEntity
} from '../../model'

export const FreqorderActionLoading = (): FreqorderActionEntity => ({
  type: Types.SHOW_FREQORDER_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const FreqorderActionSuccess = (
  payload: FreqorderResultEntity[]
): FreqorderActionEntity => ({
  type: Types.SHOW_FREQORDER_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const FreqorderActionFailure = (errMsg: string): FreqorderActionEntity => ({
  type: Types.SHOW_FREQORDER_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const FreqorderAction = (inputs : FreqorderInputEntity) => async(dispatch : any) => {
  dispatch(FreqorderActionLoading());
  const headers: any = {
    "Content-Type": "application/json"
  };
  await axios
    .post(`/ord/l/freq`,inputs,{ headers })
    .then(response => {
      if(response.data.appStatusCode === 0){
        let data : any = []
        data.push(response.data.payloadJson.data)
        dispatch(FreqorderActionSuccess(data))
      } else {
        dispatch(FreqorderActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(FreqorderActionFailure("Something went wrong, Please try again later!"));
    });
}