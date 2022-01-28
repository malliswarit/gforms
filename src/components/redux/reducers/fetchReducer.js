import * as ActionTypes from "../actionTypes";

const initialState = {
  cardList: [],
  sample: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return { ...state, cardList: action.data };
    case ActionTypes.UPDATE_LIST:
      return { ...state, cardList: action.data };
    case ActionTypes.SAMPLE_DATA:
      return { ...state, sample: action.data };
    default:
      return state;
  }
};
export default reducer;