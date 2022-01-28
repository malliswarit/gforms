import { combineReducers } from 'redux';

import fetchReducer from './fetchReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    fetchCards: fetchReducer,
    common:commonReducer
});

export default rootReducer;