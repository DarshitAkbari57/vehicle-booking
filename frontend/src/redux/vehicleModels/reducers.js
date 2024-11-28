import * as actionTypes from "../ActionTypes";

const initialState = {
  model: [],
};

const modelTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MODEL_BY_TYPE_SUCCESS:
      return {
        ...state,
        model: action?.payload?.vehicleModels,
      };
    default:
      return state;
  }
};

export default modelTypeReducer;
