export const RECEIVE_WINES = 'RECEIVE_WINES';
import * as APIUtil from '../util/wines_util';

export const scrapeWines = () => dispatch => (
	APIUtil.scrapeWines()
		.then(wines => dispatch(receiveWines(wines)))
);

export const receiveWines = wines => {
	return {
		type: RECEIVE_WINES,
		wines
	};
}
