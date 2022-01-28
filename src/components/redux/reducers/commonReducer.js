import * as ActionTypes from "../actionTypes";

const initialState={
    isLoading:false
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING_DATA:
       return { ...state, isLoading: true};
  
    default:
       return state;
  }
};
export default commonReducer;