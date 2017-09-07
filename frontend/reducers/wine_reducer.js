import { RECEIVE_WINES } from '../actions/wine_actions';
import merge from 'lodash/merge';

const WineReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WINES:
      return merge({}, action.wines);
    default:
      return state;
  }
};

export default WineReducer;