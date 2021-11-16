import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    error: ""
}

const ShortbookItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHORTBOOK_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.SHORTBOOK_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHORTBOOK_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default ShortbookItemsReducer;