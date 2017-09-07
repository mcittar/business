import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import WineReducer from './wine_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  wines: WineReducer
});

export default RootReducer;