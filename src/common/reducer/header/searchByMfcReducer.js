import { Types } from "../../constant/action";
import { SearchByMfcEntity, SearchByMfcActionEntity } from "../../model";

const initialState: SearchByMfcEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const SearchByMfcReducer = (state: SearchByMfcEntity = initialState, action: SearchByMfcActionEntity): SearchByMfcEntity => {
    switch (action.type) {
        case Types.SEARCH_BY_MFC_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_MFC_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_MFC_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default SearchByMfcReducer;