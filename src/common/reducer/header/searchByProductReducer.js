import { Types } from "../../constant/action";
import { SearchByProductEntity, SearchByProductActionEntity } from "../../model";

const initialState: SearchByProductEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const SearchByProductReducer = (state: SearchByProductEntity = initialState, action: SearchByProductActionEntity): SearchByProductEntity => {
    switch (action.type) {
        case Types.SEARCH_BY_PRODUCT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_PRODUCT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_PRODUCT_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default SearchByProductReducer;