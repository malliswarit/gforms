
import * as ActionTypes from "../actionTypes";
import axios from "axios";

const actions = {
  fetchList: payload => ({
    type: ActionTypes.FETCH_DATA,
    data: payload
  }),
  SampleData: payload => ({
    type: ActionTypes.SAMPLE_DATA,
    data: payload
  }),
  updateInfo: payload => ({
    type: ActionTypes.UPDATE_LIST,
    data: payload
  }),

};

export function fetchAll() {
  return function (dispatch) {
    return axios
      .get(`jsonFiles/question.json`)
      .then(response => {
        console.log(response);

        dispatch(actions.fetchList(response.data));

      })
      .catch(error => {
        console.log(error.response);

        return error && error.response && error.response.status;
      });
  };
}

export function updateList(data) {
  return function (dispatch) {
    dispatch(actions.updateInfo(data));
  };
}


export function existingCard() {
  return function (dispatch) {
    return axios
      .get(`jsonFiles/sampleQuestion.json`)
      .then(response => {
        console.log(response);

        dispatch(actions.SampleData(response.data));

      })
      .catch(error => {
        console.log(error.response);

        return error && error.response && error.response.status;
      });
  };
}

export function updateCard(data) {
  return function (dispatch) {
    dispatch(actions.SampleData(data));

  };
}


