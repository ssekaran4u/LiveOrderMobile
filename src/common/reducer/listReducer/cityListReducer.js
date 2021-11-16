
import { AuthConstants } from "../../constant/action";

const initialState  = {
    payload: [],
    error: ""
}

const CityListReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthConstants.CITY_LIST_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case AuthConstants.CITY_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default CityListReducer;