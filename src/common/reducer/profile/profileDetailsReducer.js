import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  message:"",
  payload: [],
};


const ProfileDetailsReducer = (  state = initialState,  action) => {
  switch (action.type) {
    case Types.PROFILE_DETAILS_LOADING:
      return {
        loading: action.loading,
        error: action.error,
        message:action.message
      };

    case Types.PROFILE_DETAILS_SUCCESS:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error,
        message:action.message
      };

    case Types.PROFILE_DETAILS_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        message:action.message
      };

    default:
      return state;
  }
};

export default ProfileDetailsReducer;
