import { Types } from "../../constant/action";
import { RegisterEntity, RegisterActionEntity } from "../../model";

const initialState: RegisterEntity = {
  loading: false,
  error: "",
  payload: []
};

const ChangePasswordReducer = (
  state: RegisterEntity = initialState,
  action: RegisterActionEntity
): RegisterEntity => {
  switch (action.type) {
    case Types.CHANGE_PASSWORD_LOADING:
      return {
        loading: action.loading,
        error: action.error,
        payload:action.payload
      };

    case Types.CHANGE_PASSWORD_SUCCESS:
      return {
        loading: action.loading,
        error: action.error,
        payload:action.payload

      };

    case Types.CHANGE_PASSWORD_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        payload:action.payload

      };

    default:
      return state;
  }
};

export default ChangePasswordReducer;
