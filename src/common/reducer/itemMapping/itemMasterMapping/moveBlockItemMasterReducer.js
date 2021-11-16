import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    error: ""
}

const MoveBlockItemMasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.BLOCK_ITEM_MASTER_MAP_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.BLOCK_ITEM_MASTER_MAP_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.BLOCK_ITEM_MASTER_MAP_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default MoveBlockItemMasterReducer;