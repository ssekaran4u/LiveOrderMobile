import { Types } from "../../constant/action";
import { FreqorderEntity, FreqorderActionEntity } from "../../model";

const initialState: FreqorderEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const FreqorderReducer = (state: FreqorderEntity = initialState, action: FreqorderActionEntity): FreqorderEntity => {
    switch (action.type) {
        case Types.SHOW_FREQORDER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_FREQORDER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_BANNER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default FreqorderReducer;