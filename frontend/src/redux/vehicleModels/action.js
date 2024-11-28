import { apiGet, apiPost, apiPut } from "../axios";
import * as actionTypes from "../ActionTypes";
import { generatePopup } from "../../utility/popup";

export const GetModelsByType = (number, dispatch) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_MODEL_BY_TYPE_INIT,
    });

    try {
      const response = await apiGet(
        `vehiclemodels/by-vehicletype?vehicletypeid=${number}`
      );
      if (response.status === 200) {
        dispatch({
          type: actionTypes.GET_MODEL_BY_TYPE_SUCCESS,
          payload: response.data,
        });
        return response.data;
      } else {
        dispatch({
          type: actionTypes.GET_MODEL_BY_TYPE_FAIL,
          payload: response?.data?.message,
        });
        return response.data;
      }
    } catch (error) {
      if (error?.status === 401) {
        dispatch({
          type: actionTypes.GET_MODEL_BY_TYPE_FAIL,
          payload: error?.data?.message,
        });
        localStorage.clear();
        generatePopup("error", error?.data?.message);
      }
      return error;
    }
  };
};
