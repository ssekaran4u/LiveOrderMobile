import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    error: ""
}

const AddToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.ADD_TO_CART_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.ADD_TO_CART_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default AddToCartReducer;