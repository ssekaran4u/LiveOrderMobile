import { Types } from "../../constant/action";

const initialState  = {
    loading: false,
    payload: [],
    error: ""
}
const CartCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CARTCOUNT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.CARTCOUNT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.CARTCOUNT_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}
export default CartCountReducer;