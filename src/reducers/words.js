import { GET_WORDS_REQUEST, GET_WORDS_SUCCESS } from "../actions/api/index";

const initialState = {
  api: [],
};

export function api(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS_REQUEST:
      return { ...state, apiIsFetching: true };
    case GET_WORDS_SUCCESS:
      return {
        ...state,
        api: action.payload,
        apiIsFetching: false,
      };
    default:
      return state;
  }
}
