import { Types } from "../../constant/action";
import { SearchByMoleculeEntity, SearchByMoleculeActionEntity } from "../../model";

const initialState: SearchByMoleculeEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const SearchByMoleculeReducer = (state: SearchByMoleculeEntity = initialState, action: SearchByMoleculeActionEntity): SearchByMoleculeEntity => {
    switch (action.type) {
        case Types.SEARCH_BY_MOLECULE_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_MOLECULE_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SEARCH_BY_MOLECULE_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default SearchByMoleculeReducer;