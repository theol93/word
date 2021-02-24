import { GET_WORDS_REQUEST, GET_WORDS_SUCCESS } from "../actions/list/index";

const initialState = {
  list: [],
};

export function list(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS_REQUEST:
      return { ...state, wordsIsFetching: true };
    case GET_WORDS_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        wordsIsFetching: false,
      };
    default:
      return state;
  }
}
