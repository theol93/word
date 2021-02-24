export const GET_WORDS_REQUEST = 'GET_WORDS_REQUEST';
export const GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS';

export function getWords(word) {
	return (dispatch) => {
		dispatch({ type: GET_WORDS_REQUEST });
		dispatch(wordsSuccess(word))
	}
}

const wordsSuccess = (payload) => ({
	type: GET_WORDS_SUCCESS,
	payload,
})
