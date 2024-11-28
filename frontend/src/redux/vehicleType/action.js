import { apiGet, apiPost, apiPut } from "../axios";
import * as actionTypes from "../ActionTypes";
import { generatePopup } from "../../utility/popup";

export const GetTypeByWheels = (number, dispatch) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_TYPE_BY_WHEELS_INIT,
    });

    try {
      const response = await apiGet(`vehicle-type/by-wheels?wheels=${number}`);
      if (response.status === 200) {
        dispatch({
          type: actionTypes.GET_TYPE_BY_WHEELS_SUCCESS,
          payload: response.data,
        });
        return response.data;
      } else {
        dispatch({
          type: actionTypes.GET_TYPE_BY_WHEELS_FAIL,
          payload: response?.data?.message,
        });
        return response.data;
      }
    } catch (error) {
      if (error?.status === 401) {
        dispatch({
          type: actionTypes.GET_TYPE_BY_WHEELS_FAIL,
          payload: error?.data?.message,
        });
        localStorage.clear();
        generatePopup("error", error?.data?.message);
      }
      return error;
    }
  };
};
