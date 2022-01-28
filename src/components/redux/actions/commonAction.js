
import * as ActionTypes from "../actionTypes";


const actions = {
    LoadSpinner: payload => ({
      type: ActionTypes.LOADING_DATA,
      data: payload
    }),

  };

export function loader(data) {
    return function(dispatch) {
        dispatch(actions.LoadSpinner(data));
    };
  }


