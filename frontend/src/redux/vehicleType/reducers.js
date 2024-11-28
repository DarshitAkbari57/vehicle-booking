import * as actionTypes from "../ActionTypes";

const initialState = {
  type: [],
};

const vehicleTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TYPE_BY_WHEELS_INIT:
      return {
        ...state,
      };
    case actionTypes.GET_TYPE_BY_WHEELS_SUCCESS:
      return {
        ...state,
        type: action.payload,
      };
    case actionTypes.GET_TYPE_BY_WHEELS_FAIL:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};

export default vehicleTypeReducer;
