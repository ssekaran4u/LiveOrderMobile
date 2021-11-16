import { Types } from "../../constant/action";
import { SearchBySellerEntity, SearchBySellerActionEntity } from "../../model";

const initialState: SearchBySellerEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const SearchBySellerReducer = (state: SearchBySellerEntity = initialState, action: SearchBySellerActionEntity): SearchBySellerEntity => {
    switch (action.type) {
        case Types.SEARCH_BY_SELLER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_SELLER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_SELLER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default SearchBySellerReducer;