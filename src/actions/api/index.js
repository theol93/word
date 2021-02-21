export const GET_WORDS_REQUEST = 'GET_WORDS_REQUEST';
export const GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS';

export function getWords() {
	return (dispatch) => {
		dispatch({ type: GET_WORDS_REQUEST });

		(async function () {
			let response = await fetch(
				'http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&limit=10&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json'
			)
			response = await response.json()
			dispatch(wordsSuccess(response.artists.artist))
		})();
	}
}

const wordsSuccess = (words) => ({
	type: GET_WORDS_SUCCESS,
	payload: [...words],
})
