import { Types } from "../../constant/action";
import { BranchUserListResultEntity, BranchUserListActionEntity } from "../../model";

const initialState: BranchUserListResultEntity = {
  payload: [],
  error: ""
};

const GetBranchUserListReducer = (
  state: BranchUserListResultEntity = initialState,
  action: BranchUserListActionEntity
): BranchUserListResultEntity => {
    
  switch (action.type) {
    case Types.GET_BRANCH_USER_SUCCESS:
      return {
        payload: action.payload,
        error: action.error
      };

    case Types.GET_BRANCH_USER_FAILURE:
      return {
        payload: action.payload,
        error: action.error
      };

    default:
      return state;
  }
};

export default GetBranchUserListReducer;
